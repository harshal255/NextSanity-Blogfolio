import React, { useEffect } from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import wavingHand from '../public/images/waving-hand.gif';
import Image from 'next/image';
import { useTheme } from 'next-themes';




const Hero = ({ profile, typingtext, socialmedia }) => {

  const projectId = process.env.PROJECT_ID;
  // console.log(projectId);
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);

  //for theme change 
  const { theme, setTheme } = useTheme();

  //tailwind css function
  const buttons = 'my-2 sm:flex justify-start';
  const buttonStyle = 'text-[11px] px-2 lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-40 lg:w-60 overflow-hidden';





  return (
    <>
      <img alt="space" className="absolute dark:opacity-20 lg:mt-[-7rem] visible min-h-[100vh] w-[100vw]" src={theme === "dark" ? "/images/space2.jpg" : "/images/bg.png"} height={100} width={100} />
      <div className="relative pt-[5rem] min-h-[100vh] mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20" id="Hero">
        <div className='z-10 flex'>
          <div className='flex xl:flex-row flex-col-reverse items-center m-auto'>
            <div className="headings flex flex-col items-start justify-center text-[1rem] lg:text-[2rem] lg:w-3/5 w-full lg:p-6 lg:pt-[10rem] mx-auto">
              <div>
                <div className='flex  gap-2 items-center'>
                  <Image unoptimized={true} alt='waving-hand' height={30} width={45} src={wavingHand} />
                  <span> Hey There..!</span>

                </div>
                <span className='sm:text-[4rem] font-semibold md:text-[3rem] lg:text-[4rem] text-[2rem] dark:text-white'><b>
                  {profile.name}
                </b>

                </span>
                <span className='sm:text-xl text-[1rem] flex'> <span className='sm:mr-2 mr-1 '>I am a </span>

                  <TypeAnimation
                    sequence={[`${typingtext[0].name}`, 1000, `${typingtext[1].name}`, 1000, `${typingtext[2].name}`, 1000, `${typingtext[3].name}`, 1000]}
                    speed={75}
                    wrapper="h2"
                    repeat={Infinity}
                  />


                </span>
                <span className=' text-secondary font-light sm:text-xl text-[1rem]'>
                  {profile.homeabout}
                </span>


                <div className={buttons}>
                  <div className="buttons text-center flex items-center justify-center lg:gap-5">
                    <Link href={`mailto:${profile.email}`}> <button className={buttonStyle}>Mail Me</button></Link>
                  </div>
                  <div className="buttons text-center flex items-center justify-center lg:gap-5">
                    <Link href={profile.resume} target="_blank"><button className={buttonStyle}>Resume</button></Link>
                  </div>
                </div>

              </div>
            </div>
            <div className='sm:w-2/5 w-[15rem] xl:mr-[4rem] lg:m-0' >
              <div>
                <img src={builder.image(profile.image).width(1500).url()} alt="Harshal Kahar" className='rounded-full xl:py-[5rem] xl:pr-[9.5rem] p-[3rem] xl:mt-[5rem] xl:pl-0 drop-shadow-2xl md:mt-[10rem] md:p-1 lg:p-6' />
              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Hero

export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  // const query = `*[_type == "profile"]`;
  const query = `*[_type == "profile"][0]`;
  const profile = await client.fetch(query);
  // console.log(profile[0]);

  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);


  const typingquery = `*[_type == "typingtext"]`;
  const typingtext = await client.fetch(typingquery);

  const socialquery = `*[_type == "socialmedia"][0]`;
  const socialmedia = await client.fetch(socialquery);



  return {
    props: {
      profile, typingtext, socialmedia

    }
  }
}