import React, { useState, useRef } from 'react';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import Title from './components/Title';


const Experience = ({ experience, education, certification,titlequotes }) => {

  const projectId = process.env.PROJECT_ID;

  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);
  const buttonStyle = 'text-[11px] text-center lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-[30%] lg:w-60 overflow-hidden ';

  const [selectedButton, setSelectedButton] = useState('experience');
  const [showAllExperience, setShowAllExperience] = useState(false);
  const experienceRef = useRef(null);

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = (buttonName) => {
    // console.log("Button is selected" + buttonName);
    scrollToExperience();
    setSelectedButton(buttonName);
  };

  const setShowAllExperienceFunction = () => {
    setShowAllExperience(!showAllExperience);
    scrollToExperience();
  }

  //sorting with starting date
  experience.sort((a, b) => {
    const launchDateA = new Date(a.launchAt);
    const launchDateB = new Date(b.launchAt);
    return launchDateA - launchDateB;
  });
  education.sort((a, b) => {
    const launchDateA = new Date(a.launchAt);
    const launchDateB = new Date(b.launchAt);
    return launchDateA - launchDateB;
  });
  certification.sort((a, b) => {
    const launchDateA = new Date(a.launchAt);
    const launchDateB = new Date(b.launchAt);
    return launchDateA - launchDateB;
  });

  const displayedExperiencewithCategories = selectedButton === 'experience'
    ? experience.slice(0, showAllExperience ? undefined : 2)
    : selectedButton === 'certification'
      ? certification.slice(0, showAllExperience ? undefined : 2)
      : selectedButton === 'education'
        ? education.slice(0, showAllExperience ? undefined : 2)
        : experience.slice(0, showAllExperience ? undefined : 2)


  return (
    <section id="Experience" ref={experienceRef} className='sm:py-[6rem] py:5 min-h-[100vh] mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20'>
    
      <Title mainTitle="Experience" smallTitle={titlequotes[0].pagequotes.experience}></Title>


      <div className="lg:container lg:w-full lg:mt-3 m-auto">
        {/* Button Group */}
        <div className="buttons text-center flex items-center justify-center lg:gap-5">
          <button
            className={`${buttonStyle} ${selectedButton === 'experience' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
            onClick={() => handleButtonClick('experience')}>
            Experience
          </button>
          <button
            className={`${buttonStyle} ${selectedButton === 'certification' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
            onClick={() => handleButtonClick('certification')}>
            Certification
          </button>
          <button
            className={`${buttonStyle} ${selectedButton === 'education' ? 'border-white text-primary drop-shadow-xl before:scale-50 before:opacity-0 after:opacity-100 after:scale-100' : 'border-primary'}`}
            onClick={() => handleButtonClick('education')}>
            Education
          </button>


        </div>
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-secondary h-full border"></div>
          {
            displayedExperiencewithCategories.map((item, index) => {

              const isLeftTimeline = index % 2 === 0;
              const timelineClassName = isLeftTimeline ? "md:flex-row-reverse" : "";

              // Convert date format from "2022-04" to "April-2022"
              const launchDate = new Date(item.launchAt);
              const endDate = new Date(item.EndedAt)
              const formattedStartDate = launchDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
              const formattedEndedDate = endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

              return (
                <div className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${timelineClassName}`} key={item.title}>
                  <div className="order-1 md:w-5/12"></div>

                  <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 rounded-full ring-4 md:ring-8 ring-white bg-white overflow-hidden">
                    {item.icon ? (
                      <img src={builder.image(item.icon).width(500).url()} alt={item.title} className="rounded-full text-base md:text-xl text-white" />
                    ) : (
                      <img src="/images/code.png" alt={item.title} className="rounded-full text-base md:text-xl text-gray-100" />
                    )}

                  </span>
                  <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-opacity-50 border border-primary bg-white dark:bg-gray-900/50 md:w-5/12 p-3 md:px-4 md:py-4">
                    <h3 className="mb-2 font-medium text-lg md:text-xl dark:text-white text-black">{item.title}</h3>
                    <p className="text-sm text-secondary font-medium">{item.role} | {formattedStartDate}-{formattedEndedDate}</p>
                    <ul className="text-sm text-secondary mt-2 ml-4 list-disc">
                      <li className="mb-0.5">{item.description1}</li>
                      <li className="mb-0.5">{item.description2}</li>
                      <li className="mb-0.5">Skills : {item.skills}</li>
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="buttons text-center flex items-center justify-center lg:gap-5">
          <button className={`${buttonStyle}`} onClick={setShowAllExperienceFunction}>
            {showAllExperience ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>

    </section>
  )
}

export default Experience

export async function getServerSideProps() {
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });

  const Experiencequery = `*[_type == "experience"]`;
  const experience = await client.fetch(Experiencequery);

  const Educationquery = `*[_type == "education"]`;
  const education = await client.fetch(Educationquery);

  const Certificationquery = `*[_type == "certification"]`;
  const certification = await client.fetch(Certificationquery);

  const quotesquery = `*[_type == "titlequotes"]`;
  const titlequotes = await client.fetch(quotesquery);

  return {
    props: {
      experience, education, certification,titlequotes

    }
  }
}