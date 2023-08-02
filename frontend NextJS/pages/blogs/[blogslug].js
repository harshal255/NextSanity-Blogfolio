import { createClient } from "next-sanity";
import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";
import Togglebutton from "../components/ToggleButton";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'


export default function Page({ oneblog, author }) {

    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client);
    const createdAtDate = new Date(oneblog.createdAt);
    const formattedcreatedAtDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(createdAtDate);

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }


    return (
        <>

            <Head>
                <title>{oneblog.title}</title>
                <meta name="description" content={oneblog.titledescription}/>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            
            <section className='px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20 bg-white dark:bg-black -mt-10'>
                <Togglebutton position="fixed"></Togglebutton>
                <div className="font-bodyText text-lightBluePrimary flex flex-col justify-center items-start gap-4 w-[90%] md:w-4/5 mx-auto lg:w-[50%] min-h-[100vh] lg:my-10 lg:pt-10"
                >
                    <h1 className="text-2xl md:text-4xl mt-4 font-semibold text-black dark:text-white">
                        {oneblog.title} :
                    </h1>
                    <article className="text-secondary">
                        {oneblog.titledescription}
                    </article>
                    <address className="flex items-center mb-6 not-italic ">
                        <div className="inline-flex items-center mr-3 text-sm text-secondary">
                            <img className="mr-4 w-16 h-16 rounded-full" src={builder.image(author.image).width(200).url()}
                                alt={oneblog.title} />
                            <div>
                                <span rel="author" className="text-xl font-bold text-secondary">{author.authorname}</span>
                                <p className="text-base font-light text-secondary ">{author.decs}</p>
                                <p className="text-base font-light text-secondary"><time dateTime="2022-02-08"
                                    title="February 8th, 2022" pubdate="true">{formattedcreatedAtDate}</time></p>
                            </div>
                        </div>
                    </address>
                    <Image
                        src={builder.image(oneblog.blogimage).width(1200).url()}
                        width={1200}
                        height={800}
                        alt={oneblog.title}
                        className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="text-base flex flex-row flex-wrap items-center gap-x-3 gap-y-1 justify-start w-[80%] md:w-auto">
                        <p className='text-secondary'>{oneblog.blogtag}</p>
                        <p className='text-secondary'>|</p>
                        <p className='text-secondary'>{formattedcreatedAtDate}</p>
                    </div>


                    <div className="flex flex-row flex-wrap gap-1.5 text-end">
                        {oneblog.tags.map((tech) => (
                            <span key={tech} className="text-sm py-0.5 md:text-base border text-primary border-primary px-3 rounded-full font-light">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary text-justify">
                            {oneblog.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary text-justify">
                            {oneblog.paraone}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary text-justify">
                            {oneblog.paratwo}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary text-justify">
                            {oneblog.parathree}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-base md:text-lg font-light text-secondary text-justify">
                            {oneblog.parafour}
                        </p>
                    </div>
                </div>

            </section>
        </>)
}



export async function getServerSideProps(context) {
    const { blogslug } = context.query;
    console.log(blogslug);

    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });

    const OneBlogquery = `*[_type == "blog" && slug.current == "${blogslug}"][0]`;
    const oneblog = await client.fetch(OneBlogquery);

    const authorquery = `*[_type == "author"][0]`;
    const author = await client.fetch(authorquery);


    return {
        props: {
            oneblog, author

        }
    }

}