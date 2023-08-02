import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { RiShareCircleFill } from "react-icons/ri";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Title from '../components/Title';

const Project = ({ project, websiteprojects, webapplicationprojects, titlequotes }) => {
    const projectId = process.env.PROJECT_ID;

    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client);

    const [selectedButton, setSelectedButton] = useState('web-application');
    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectRef = useRef(null);

    const scrollToProjects = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleButtonClick = (buttonName) => {
        // console.log("Button is selected" + buttonName);
        scrollToProjects();
        setSelectedButton(buttonName);
    };

    const setShowAllProjectsFunction = () => {
        setShowAllProjects(!showAllProjects);
        scrollToProjects();
    }
    // Render your component here using the sorted `element` object
    webapplicationprojects.sort((a, b) => a.id - b.id)
    websiteprojects.sort((a, b) => a.id - b.id);

    const displayedProjectwithCategories = selectedButton === 'web-application'
        ? webapplicationprojects.slice(0, showAllProjects ? undefined : 2)
        : selectedButton === 'website'
            ? websiteprojects.slice(0, showAllProjects ? undefined : 2)
            : webapplicationprojects.slice(0, showAllProjects ? undefined : 2);


    const buttonStyle = 'text-[11px] text-center lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-28 lg:w-60 overflow-hidden ';
    return (
        <div id='Projects' ref={projectRef} className='sm:py-[6rem] py:5 overflow-x-hidden overflow-y-clip mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 min-h-[100vh]'>

            <Title mainTitle="Projects" smallTitle={titlequotes[0].pagequotes.project}></Title>


            <section className="font-bodyText flex flex-col justify-start items-center min-h-screen h-full gap-10 lg:mt-3">
                {/* Button Group */}
                <div className="buttons text-center flex items-center justify-center lg:gap-5">
                    <button
                        className={`${buttonStyle} ${selectedButton === 'web-application' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
                        onClick={() => handleButtonClick('web-application')}>
                        Web-Applications
                    </button>
                    <button
                        className={`${buttonStyle} ${selectedButton === 'website' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
                        onClick={() => handleButtonClick('website')}>
                        Websites
                    </button>
                </div>


                <div className="flex flex-col justify-center items-center gap-12 w-full md:w-3/4 ">
                    {
                        displayedProjectwithCategories.map((element) => {
                            let id = element.slug.current;
                            {/* console.log(id); */ }
                            return (
                                <div className="flex flex-col justify-center items-center gap-4 lg:w-[65%]" key={id}>
                                    <Link href={`projects/${id}`} className="w-full relative rounded-lg overflow-hidden group m-auto" scroll={false}>
                                        <Image
                                            src={builder.image(element.imgUrl).width(1200).height(600).url()}
                                            width={600}
                                            height={300}
                                            alt={element.title}
                                            className="w-full h-full lg:h-[40%] object-cover group-hover:scale-105 duration-500 m-auto -z-10"
                                        />

                                        <p className="opacity-0 flex-row gap-2 group-hover:opacity-70 duration-300 text-2xl md:text-3xl absolute top-0 w-full h-full flex justify-center items-center bg-black/30 dark:bg-black/50 text-white m-auto">
                                            Learn More
                                            <RiShareCircleFill />
                                        </p>
                                    </Link>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex flex-row justify-between items-center">
                                            <h2 className="text-2xl md:text-3xl text-black dark:text-white font-medium">
                                                {element.title}
                                            </h2>
                                            <span className="flex text-xs md:text-sm rounded-full text-primary px-2 md:px-3 py-0.5 md:py-1 font-normal border border-primary">
                                                {element.projecttag}
                                            </span>
                                        </div>
                                        <p className="text-sm md:text-base text-secondary font-light">
                                            {element.titledescription}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="buttons text-center flex items-center justify-center lg:gap-5">
                    <button className={`${buttonStyle}`} onClick={setShowAllProjectsFunction}>
                        {showAllProjects ? 'View Less' : 'View More'}
                    </button>
                </div>

            </section>
        </div>

    )
}

export default Project

export async function getServerSideProps() {

    const projectId = process.env.PROJECT_ID;
    const client = createClient({
        projectId: projectId,
        dataset: "production",
        useCdn: false
    });

    const Projectquery = `*[_type == "project"]`;
    const project = await client.fetch(Projectquery);
    const websites = `*[_type == "project" && category == "website"]`;
    const websiteprojects = await client.fetch(websites);
    const webapplications = `*[_type == "project" && category == "web-applications"]`;
    const webapplicationprojects = await client.fetch(webapplications);

    const quotesquery = `*[_type == "titlequotes"]`;
    const titlequotes = await client.fetch(quotesquery);

    return {
        props: {
            project, websiteprojects, webapplicationprojects, titlequotes

        }
    }
}
