import React, { useState, useRef, useEffect } from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Title from './components/Title';
import { motion } from "framer-motion"




const Skills = ({ others, frontend, backend, titlequotes }) => {
  const projectId = process.env.PROJECT_ID;

  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);

  const buttonStyle = 'text-[11px] text-center lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-[30%] lg:w-60 overflow-hidden ';

  const [selectedButton, setSelectedButton] = useState('frontend');

  const handleButtonClick = (buttonName) => {
    // console.log("Button is selected" + buttonName);
    setSelectedButton(buttonName);
  };
  frontend.sort((a, b) => a.id - b.id);
  backend.sort((a, b) => a.id - b.id);
  others.sort((a, b) => a.id - b.id);

  const displayedSkills = selectedButton === 'frontend' ? frontend :
    selectedButton === 'backend' ? backend :
      selectedButton === 'others' ? others : frontend;



  const iconStyleWithBackground = `w-[6rem] h-[6rem] inline-flex items-center justify-center bg-purple-100 rounded-full text-primary mb-4 mx-1 md:mx-2 cursor-pointer p-5`;




  return (
    <div className='sm:pt-[6rem] pt:5 mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 min-h-[100vh] ' id='Skills'>

      <Title mainTitle="Skills & Technology" smallTitle={titlequotes[0].pagequotes.skill}></Title>

      <section className="body-font lg:mt-3">
        <div className="container px-0 sm:px-10 lg:px-10 mx-auto">
          {/* Button Group */}
          <div className="buttons text-center flex items-center justify-center lg:gap-5">
            <button
              className={`${buttonStyle} ${selectedButton === 'frontend' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
              onClick={() => handleButtonClick('frontend')}
            >
              Frontend
            </button>
            <button
              className={`${buttonStyle} ${selectedButton === 'backend' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
              onClick={() => handleButtonClick('backend')}
            >
              Backend
            </button>

            <button
              className={`${buttonStyle} ${selectedButton === 'others' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
              onClick={() => handleButtonClick('others')}
            >
              Others
            </button>
          </div>

          {/* Skills Container */}
          <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-5 lg:gap-8">
            {displayedSkills.map((item) => {
              return (
                <motion.div className='flex flex-col text-center' key={item.name} drag
                  dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                  }}>
                  <div className={`${iconStyleWithBackground}`}>
                    <img src={builder.image(item.icon).width(50).url()} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });


  const Frontendquery = `*[_type == "frontend"]`;
  const frontend = await client.fetch(Frontendquery);

  const Backendquery = `*[_type == "backend"]`;
  const backend = await client.fetch(Backendquery);

  const Others = `*[_type == "others"]`;
  const others = await client.fetch(Others);

  const quotesquery = `*[_type == "titlequotes"]`;
  const titlequotes = await client.fetch(quotesquery);


  return {
    props: {
      others, frontend, backend, titlequotes

    }
  }
}