import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import ToggleButton from './ToggleButton';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';


const Sidebar = ({ profile }) => {

  const projectId = process.env.PROJECT_ID;
  // console.log(projectId);
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client);
  const listyle =
    'listyle m-1 md:m-3 text-secondary hover:text-black dark:hover:text-white duration-300 flex flex-col font-semibold cursor-pointer h-6';

  const handleScroll = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const handleMenuClick = () => {
    console.log("click menu");
    setShowSidebar(!showSidebar);
  };

  // Function to close the sidebar when clicked outside of it
  const handleClickOutsideSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSidebar);
    };
  }, []);

  return (
    <div className="fixed w-[100%] z-50 flex items-center justify-between px-[2rem] md:px-[5rem] lg:px-[10rem] py-[2rem] text-white h-[5rem]  bg-white dark:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 border-purple-100">

      <div className="flex items-center gap-3 md:-ml-[2rem] justify-center cursor-move">
        <img src={builder.image(profile.websitelogo).width(1500).url()} alt="HK" className="h-10 w-10" />
      </div>

      {/* ul for only >mobile width */}
      {/* <ul className="text-center ml-10 items-center px-5 hidden sm:flex justify-between">
        <Link
          to="Hero"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          Home
        </Link>
        <Link
          to="About"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          About
        </Link>
        <Link
          to="Skills"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          Skills
        </Link>
        <Link
          to="Experience"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          Experience
        </Link>
        <Link
          to="Projects"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          Projects
        </Link>
        <Link
          to="Blogs"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          Blogs
        </Link>
        <Link
          to="Contact"
          className={listyle}
          activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
          spy={true}
          smooth={true}
          offset={-40}
          duration={200}
        >
          Contact
        </Link>

      </ul> */}
      <div className='flex text-center items-center justify-center text-black dark:text-white bg-white dark:bg-black'>
        <ToggleButton position="static"></ToggleButton>
        <AiOutlineMenuFold className='cursor-pointer' onClick={handleMenuClick}></AiOutlineMenuFold>
      </div>
      <div
        className={`fixed top-0 right-0  bg-white dark:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg dark:backdrop-blur-xl bg-opacity-50 border-purple-100 min-h-screen w-4/5 sm:w-2/5 lg:w-1/5 z-80 transition-transform duration-300 transform  ${showSidebar ? 'translate-x-0' : 'translate-x-full'
          }`} ref={sidebarRef}
      >
        <div className='flex m-8 items-center text-black dark:text-white'>
          <AiOutlineMenuUnfold onClick={handleMenuClick} className='cursor-pointer'></AiOutlineMenuUnfold>
          <ToggleButton position="static"></ToggleButton>
        </div>
        <ul className='text-center items-center p-5 flex flex-col justify-between gap-10'>
          <Link
            to="Hero"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
          >
            Home
          </Link>
          <Link
            to="About"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            About
          </Link>
          <Link
            to="Skills"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            Skills
          </Link>
          <Link
            to="Experience"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            Experience
          </Link>
          <Link
            to="Projects"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            Projects
          </Link>
          <Link
            to="Blogs"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            Blogs
          </Link>
          <Link
            to="Contact"
            className={listyle}
            activeClass="dark:text-white text-black border-b-2 border-black dark:border-white"
            spy={true}
            smooth={true}
            offset={-40}
            duration={200}
          >
            Contact
          </Link>

        </ul>
        <footer className='text-black dark:text-white text-center'>{`<build from scratch🚀/>`}</footer>
      </div>
    </div>
  );
};

export default Sidebar;

export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });

  const query = `*[_type == "profile"][0]`;
  const profile = await client.fetch(query);

  return {
    props: {
      profile

    }
  }
}