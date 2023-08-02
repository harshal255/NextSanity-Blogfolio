import React from 'react';
import Link from 'next/link';
import { createClient } from "next-sanity";
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'



const Leftbar = ({ socialmedia }) => {
  console.log(socialmedia);

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

  const iconsyle = "hover:scale-125 transition-transform  lg:text-4xl text-3xl rounded-full  border-secondary p-1 "
  return (

    <div className={`hidden lg:flex text-2xl fixed flex-col bottom-5 left-5 z-20`}>
      {
        icons.map((element) => {
          const IconComponent = element.icon; // Dynamically assign the icon component based on element.icon
          return (
            <div className='lg:my-4 my-2 mx-auto' key={element.id}>

              <Link href={element.link} target='blank'>
                <IconComponent className="text-secondary hover:text-primary duration-300"></IconComponent>
              </Link>

            </div>
          )
        })
      }

    </div>
  )
}

export default Leftbar

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
