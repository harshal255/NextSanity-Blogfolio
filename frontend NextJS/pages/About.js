import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import Title from './components/Title';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';



const About = ({ profile, titlequotes }) => {

  const { theme, setTheme } = useTheme();

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);

  const buttonStyle = 'text-[11px] px-2 lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 overflow-hidden';

  return (
    <div className='mx-auto w-full'>
      <img alt="space" className="absolute dark:opacity-20 lg:mt-[-7rem] visible min-h-[100vh] w-[100vw] -z-20" src={theme === "dark" ? "/images/space2.jpg" : "/images/bg.png"} height={100} width={100} />
      <div id='About' className='mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 min-h-[100vh]'>
        <Title mainTitle="About Me" smallTitle={titlequotes[0].pagequotes.about}></Title>


        <div className='flex xl:flex-row flex-col items-center my-5'>
          <div className='sm:w-1/3 w-[15rem] lg:m-0 m-auto'>
            <img src={builder.image(profile.aboutimage).width(1500).url()} alt="About" className='w-1/2 m-auto' />
            <motion.div whileHover={{ scale: 1.2 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }} className="buttons text-center flex items-center justify-center lg:gap-5 w-full">
              <Link href={'/schoolandcollegejourney'} className='m-auto'> <button className={buttonStyle}>My Journey</button></Link>
            </motion.div>
          </div>
          <div className="headings flex flex-col items-start justify-center text-[1rem] lg:text-[2rem] lg:w-1/2 w-full lg:p-6 mx-auto">
            <h1 className="text-3xl text-secondary">{profile.name}
            </h1>
            <span className='my-2 text-primary text-[12px] px-2 border border-primary rounded-full'>{profile.aboutlabel}</span>
            <p className="mb-8 text-start dark:text-white text-black text-[12px] sm:text-xl">
              {profile.abouttwo}
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About


export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "profile"]`;
  const profile = await client.fetch(query);

  const quotesquery = `*[_type == "titlequotes"]`;
  const titlequotes = await client.fetch(quotesquery);


  return {
    props: {
      profile, titlequotes

    }
  }
}

