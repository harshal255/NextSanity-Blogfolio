import { RiShareCircleFill } from "react-icons/ri";
import Image from 'next/image';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Togglebutton from "../components/ToggleButton";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Head from "next/head";





//Dynamic Routing
export default function Page({ oneproject }) {

    const projectId = process.env.PROJECT_ID;
    const router = useRouter()

    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client);

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    // console.log(oneproject.title);
    const launchDate = new Date(oneproject.launchAt);
    const endDate = new Date(oneproject.endAt);
    const formattedluanchDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(launchDate);
    const formattedendDate = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(endDate);
    return (
        <><Head>
            <title>{oneproject.title}</title>
            <meta name="description" content={oneproject.titledescription} />
            <link rel="icon" href="/logo.ico" />

        </Head>


            <section className='px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 bg-white dark:bg-black -mt-10'>
                <Togglebutton position="fixed"></Togglebutton>

                <div className="font-bodyText text-lightBluePrimary flex flex-col justify-center items-start gap-4 w-[90%] md:w-4/5 mx-auto lg:w-[50%] min-h-[100vh] lg:my-10 lg:pt-10 py-3">
                    <h1 className="text-2xl md:text-4xl mt-4 font-semibold text-black dark:text-white">
                        {oneproject.title} :
                    </h1>
                    <article className="text-secondary">
                        {oneproject.titledescription}
                    </article>
                    <Image
                        src={builder.image(oneproject.imgUrl).width(1200).url()}
                        width={1200}
                        height={800}
                        alt={oneproject.title}
                        className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="text-base flex flex-row flex-wrap justify-start items-center gap-x-3 gap-y-1">
                        {oneproject.livedemolink && (
                            <>
                                <a
                                    href={oneproject.livedemolink}
                                    className="flex flex-row items-center gap-2 text-secondary  hover:text-primary duration-300 text-lg"
                                    target='_blank'
                                >
                                    Live Demo
                                    <RiShareCircleFill />
                                </a>
                                <p className='text-secondary'>|</p>
                            </>
                        )}

                        {oneproject.githublink && (
                            <>
                                <a
                                    href={oneproject.githublink}
                                    className="flex flex-row items-center gap-2 text-secondary hover:text-primary duration-300 text-lg"
                                    target='_blank'
                                >
                                    Github
                                    <RiShareCircleFill />
                                </a>
                                <p className='text-secondary'>|</p>
                            </>
                        )}

                        {oneproject.linkedinlink && (
                            <>
                                <a
                                    href={oneproject.linkedinlink}
                                    className="flex flex-row items-center gap-2 text-secondary  hover:text-primary duration-300 text-lg"
                                    target='_blank'
                                >
                                    LinkedIn
                                    <RiShareCircleFill />
                                </a>
                                <p className='text-secondary'>|</p>
                            </>
                        )}
                        <p className='text-secondary'>{oneproject.projecttag}</p>
                        <p className='text-secondary'>|</p>
                        <p className='text-secondary'>{formattedluanchDate}-{formattedendDate}</p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-1.5 ">
                        {oneproject.tags.map((tech) => (
                            <span key={tech} className="text-sm py-0.5 md:text-base border text-primary border-primary px-3 rounded-full font-light">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary">
                            {oneproject.description}
                        </p>
                    </div>
                </div>

            </section>
        </>

    )
}


export async function getServerSideProps(context) {
    const { projectslug } = context.query;
    // console.log(projectslug);
    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });

    const OneProjectquery = `*[_type == "project" && slug.current == "${projectslug}"][0]`;
    const oneproject = await client.fetch(OneProjectquery);
    // console.log(oneproject);
    return {
        props: {
            oneproject

        }
    }
}