import React, { useState, useRef, useEffect } from 'react';
import Title from './components/Title';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import ToggleButton from './components/ToggleButton';
import Head from 'next/head';




const Schoolcollegejourney = ({ schoolJourney, collegeJourney }) => {
  // console.log(schoolJourney);
  // console.log(schoolJourney[1].id)
  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });

  const builder = imageUrlBuilder(client);
  const [mounted, setMounted] = useState(false);






  const buttonStyle = 'text-[11px] px-2 lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-[30%] lg:w-60 overflow-hidden';
  schoolJourney.sort((a, b) => a.id - b.id);
  collegeJourney.sort((a, b) => a.id - b.id);

  const journeyRef = useRef(null);
  const journeyData = collegeJourney;
  const [displayedjourney, setDisplayedjourney] = useState(journeyData.slice(0, 2));
  const [showAll, setShowAll] = useState(false);


  const scrollTojourney = () => {
    journeyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickViewAll = () => {
    setShowAll(true);
    setDisplayedjourney(journeyData);
    scrollTojourney();
  };

  const handleClickViewLess = () => {
    setShowAll(false);
    setDisplayedjourney(journeyData.slice(0, 2));
    scrollTojourney();
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }



  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Hey There..! I am a  Harshal S. Kahar, an enthusiastic and passionate web developer from L.D. college of engineering Ahmedabad." />
        <meta name="keywords" content="harshal kahar, portfolio, harshal, full stack dev, nextjs portfolio, portfolio design, portfolio website, personal portfolio,next portfolio,portfolio with blog" />
        <meta property="og:site_name" content="Harshal's NextBlog Portfolio" />
        <meta property="og:title" content="Harshal Kahar | NextBlog Portfolio - Full Stack Developer" />
        <meta property="og:description"
          content="Hey There..! I am a  Harshal S. Kahar, I am a Fullstack web developer, ui-ux designer, web designer , image/video editor" />
        <meta property="og:url" content="https://harshalkahar.vercel.app" />
        <link rel="canonical" href="https://harshalkahar.vercel.app" />
        <meta name="author" content="Harshal Kahar" />
        <meta name="language" content="English" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://harshalkahar.vercel.app" />
        <meta name="application-name" content="Harshal Kahar | NextBlog Portfolio - Full Stack Developer" />
        <meta name="apple-mobile-web-app-title" content="Harshal Kahar | NextBlog Portfolio - Full Stack Developer" />
        <link rel="icon" href="/logo.ico" />
        <title>Harshal Kahar | School & College Journey</title>
      </Head>

      <section
        id='schoolcollegejourney' ref={journeyRef} className='sm:py-[6rem] py:5 sm:mp-10 md:mp-12 lg:mp-16 xl:mp-20 min-h-[100vh] overflow-hidden bg-white dark:bg-black'>
        <ToggleButton position="fixed"></ToggleButton>

        <Title mainTitle="My School Journey (56 to 91)" smallTitle="Hard work beats talent when talent doesn't work hard..."></Title>

        <div className="px-5 hide-scrollbar flex my-[3rem] gap-4 m-5 sm:w-[97vw] overflow-auto  scroll-snap-type-x mandatory lg:pr-[8.7rem]">
          {
            schoolJourney.map((element) => {
              return (
                <div className="overflow-hidden className shadow-lg cursor-pointer relative overflow-y-hidden item flex-shrink-0 scroll-snap-align-start border border-purple-600 rounded-lg h-[15rem] lg:h-[20rem]" key={element.id}>
                  <div className='w-full h-[15rem] lg:h-[20rem]'>
                    <img className="object-cover w-full h-[15rem] lg:h-[20rem]" src={builder.image(element.image).width(1500).url()} alt={element.title} />
                  </div>
                </div>
              )
            })
          }
        </div>


        <Title mainTitle="My College Journey (Specialist of the own Skill) " smallTitle="This is my college journey, filled with exploration, learning, and growth...."></Title>

        <div className="relative wrap overflow-hidden p-5 md:p-10 md:mt-5">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-secondary border-grey-800 h-full border"></div>
          {
            displayedjourney.map((item, index) => {

              const isLeftTimeline = index % 2 === 0;
              const timelineClassName = isLeftTimeline ? "md:flex-row-reverse" : "";

              // Convert date format from "2022-04" to "April-2022"
              const launchDate = new Date(item.launchAt);
              const endDate = new Date(item.EndedAt)
              const formattedStartDate = launchDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
              const formattedEndedDate = endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

              return (
                <div className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${timelineClassName}`} key={item.id}>
                  <div className="order-1 md:w-5/12"></div>
                  <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 rounded-full ring-4 md:ring-8 ring-white bg-white overflow-hidden">
                    {item.icon ? (
                      <img src={builder.image(item.icon).width(500).url()} alt={item.title} className="rounded-full text-base md:text-xl text-white" />
                    ) : (
                      <img src="/images/Experience/code.png" alt={item.title} className="rounded-full text-base md:text-xl text-white" />
                    )}
                  </span>
                  <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-opacity-50 border border-primary dark:bg-gray-900/50 bg-white md:w-5/12 p-3 md:px-4 md:py-4">
                    <h3 className="mb-2 font-medium text-lg md:text-xl text-black dark:text-white">{item.title}</h3>
                    <p className="text-sm text-secondary font-medium">{item.role} | {formattedStartDate}-{formattedEndedDate}</p>
                    <ul className="text-sm text-secondary mt-2 ml-4 list-disc">
                      <li className="mb-0.5">{item.description}</li>
                      <li className="mb-0.5">Skills : {item.skills}</li>
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
        {!showAll ? (
          <div className="buttons text-center flex items-center justify-center lg:gap-5">
            <button className={`${buttonStyle}`} onClick={handleClickViewAll}>
              View all
            </button>
          </div>
        ) : (
          <div className="buttons text-center flex items-center justify-center lg:gap-5">
            <button className={`${buttonStyle}`} onClick={handleClickViewLess}>
              View less
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Schoolcollegejourney

export async function getStaticProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const schoolquery = `*[_type == "myschooljourney"]`;
  const schoolJourney = await client.fetch(schoolquery);

  const collegequery = `*[_type == "mycollegejourney"]`;
  const collegeJourney = await client.fetch(collegequery);

  return {
    props: {
      schoolJourney, collegeJourney

    }
  }
}