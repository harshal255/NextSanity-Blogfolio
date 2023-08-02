import React from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { createClient } from "next-sanity";



const Footer = ({ socialmedia }) => {
  const icons = [
    {
      id: "1",
      type: "github",
      link: socialmedia[0].github,
      icon: FiGithub
    },
    {
      id: "2",
      type: "instagram",
      link: socialmedia[0].insta,
      icon: FaInstagram
    },
    {
      id: "3",
      type: "LinkedIn",
      link: socialmedia[0].linkdin,
      icon: FaLinkedinIn
    },
    {
      id: "4",
      type: "twitter",
      link: socialmedia[0].twitter,
      icon: FiTwitter
    },
  ]

  const iconsyle = "text-secondary hover:text-primary duration-300"
  return (
    <footer className="body-font dark:bg-black px-[2rem] md:px-[5rem] lg:px-[10rem]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col jus">

        <span className="flex title-font font-semibold items-center md:justify-start justify-center ">

          <span className="ml-3 font-light text-secondary text-center">{`< Made by Harshal Kahar🚀 />`}</span>
        </span>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 text-secondary  sm:border-secondary sm:py-2 sm:mt-0 mt-4">©2022-23
          <span className=" ml-1" rel="noopener noreferrer" target="_blank">All rights reserved</span>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-5 gap-5">
          {
            icons.map((element) => {
              const IconComponent = element.icon;
              return (
                <div key={element.id}>
                  <Link href={element.link} target='blank' key={element.id}>
                    <IconComponent className={iconsyle}></IconComponent>
                  </Link>
                </div>
              )
            })
          }
        </span>
      </div>
    </footer>
  )
}

export default Footer

export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });

  const socialquery = `*[_type == "socialmedia"]`;
  const socialmedia = await client.fetch(socialquery);


  return {
    props: {
      socialmedia

    }
  }
}