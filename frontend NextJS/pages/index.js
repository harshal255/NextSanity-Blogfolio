import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Technology from './Technology';
import Footer from './components/Footer';
import Projects from './projects';
import Sidebar from './components/Sidebar';
import Leftbar from './components/Leftbar';
import Blogs from './blogs';
import { createClient } from "next-sanity";
import { useState, useEffect } from 'react';
import Head from './components/head';



export default function Home({ profile, frontend, backend, others, experience, project, websiteprojects, webapplicationprojects, typingtext, blogs, education, certification, socialmedia, titlequotes, seo }) {

  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <>
      <Head seo={seo}></Head>
      <section className='dark:bg-black bg-purple-50/50 dark:text-white text-black'>

        <Sidebar profile={profile}></Sidebar>
        <Leftbar socialmedia={socialmedia}></Leftbar>

        <div className="scrollablepage">
          <Hero profile={profile} typingtext={typingtext}></Hero>
          <About profile={profile} titlequotes={titlequotes}></About>
          <Skills frontend={frontend} backend={backend} others={others} titlequotes={titlequotes}></Skills>
          <Experience experience={experience} education={education} certification={certification} titlequotes={titlequotes}></Experience>
          <Projects project={project} webapplicationprojects={webapplicationprojects} websiteprojects={websiteprojects} titlequotes={titlequotes}></Projects>
          <Blogs blogs={blogs} titlequotes={titlequotes}></Blogs>
          <Contact titlequotes={titlequotes}></Contact>
        </div>
        <Technology></Technology>
        <Footer socialmedia={socialmedia}></Footer>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });
  const { projectslug, blogslug } = context.query;


  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const Frontendquery = `*[_type == "frontend"]`;
  const frontend = await client.fetch(Frontendquery);

  const Backendquery = `*[_type == "backend"]`;
  const backend = await client.fetch(Backendquery);

  const Others = `*[_type == "others"]`;
  const others = await client.fetch(Others);

  const Experiencequery = `*[_type == "experience"]`;
  const experience = await client.fetch(Experiencequery);

  const Projectquery = `*[_type == "project"]`;
  const project = await client.fetch(Projectquery);

  const websites = `*[_type == "project" && category == "website"]`;
  const websiteprojects = await client.fetch(websites);

  const webapplications = `*[_type == "project" && category == "web-applications"]`;
  const webapplicationprojects = await client.fetch(webapplications);

  const typingquery = `*[_type == "typingtext"]`;
  const typingtext = await client.fetch(typingquery);

  const OneProjectquery = `*[_type == "project" && slug.current == "${projectslug}"][0]`;
  const oneproject = await client.fetch(OneProjectquery);

  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);

  const OneBlogquery = `*[_type == "blog" && slug.current == "${blogslug}"][0]`;
  const oneblog = await client.fetch(OneBlogquery);

  const authorquery = `*[_type == "author"][0]`;
  const author = await client.fetch(authorquery);

  const Educationquery = `*[_type == "education"]`;
  const education = await client.fetch(Educationquery);

  const Certificationquery = `*[_type == "certification"]`;
  const certification = await client.fetch(Certificationquery);

  const schoolquery = `*[_type == "myschooljourney"]`;
  const schoolJourney = await client.fetch(schoolquery);

  const collegequery = `*[_type == "mycollegejourney"]`;
  const collegeJourney = await client.fetch(collegequery);

  const socialquery = `*[_type == "socialmedia"]`;
  const socialmedia = await client.fetch(socialquery);

  const quotesquery = `*[_type == "titlequotes"]`;
  const titlequotes = await client.fetch(quotesquery);

  const seoquery = `*[_type == "seo"][0]`;
  const seo = await client.fetch(seoquery);

  return {
    props: {
      profile, others, experience, project, websiteprojects, webapplicationprojects, typingtext, oneproject, blogs, oneblog, author, education, certification, schoolJourney, collegeJourney, frontend, backend, socialmedia, titlequotes, seo

    }
  }
}



