import Link from 'next/link'
import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import Title from './components/Title';


const Contact = ({ titlequotes }) => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();// 👈️ prevent page refresh
    emailjs.sendForm(process.env.EMAILJS_SERVICE_KEY, process.env.EMAILJS_TEMPLETE_KEY, e.target, process.env.EMAILJS_PUBLIC_KEY).then((result) => {
      // console.log(result.text);
    }, (error) => {
      // console.log(error.text);
    });

    // 👇️ clear all input values in the form

    setName(' ');
    setMail(' ');
    setMessage(' ');
    setText("Thankyou for connecting with me, ✌ I will give your replay as soon as possible");
    // Clear the text after 10 seconds
    setTimeout(() => {
      setText('');
    }, 5000);


  }
  const buttonStyle = 'text-black dark:text-white text-[11px] px-[2px] lg:text-[14px] py-[5px] lg:px-[15px] lg:py-[3.5px] md:mx-1 my-[7px] border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 lg:text-xl text-[1rem] px-[15px] py-[5px] lg:px-[25px] lg:py-[3.5px] mx-1 my-[7px] hover:text-primary border rounded-[10px] hover:border-white border-primary hover:drop-shadow-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 h-10 w-[30%] lg:w-60 overflow-hidden ';


  return (
    <div id='Contact' className='mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 min-h-[100vh]'>
      <Title mainTitle="Lets Connect..." smallTitle={titlequotes[0].pagequotes.contact}></Title>
      <img src="images/map.png" alt="Contact" className='absolute hidden md:inline opacity-20' />
      <section className="text-white body-font md:mx-5 sm:px-16 md:px-12 relative z-10 pt-0">

        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-black dark:text-white">

            <form onSubmit={sendEmail} >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm">Name</label>
                <input type="text" id="name" required name="name" className="w-full  rounded bg-transparent border-secondary focus:border-primary focus:ring-purple-200 text-base focus:outline-none hover:outline-none  py-1 px-3 leading-8 transition-colors duration-500 ease-in-out border-2 text-black dark:text-white" value={name} onChange={event => setName(event.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                <input type="email" id="email" required name="email" className="w-full bg-transparent rounded border-2 border-secondary focus:border-primary focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-500 ease-in-out text-black dark:text-white" value={mail} onChange={event => setMail(event.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                <textarea id="message" name="message" required className="w-full bg-transparent rounded border-2 border-secondary focus:border-primary  focus:ring-purple-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-500 ease-in-out text-black dark:text-white" value={message} onChange={event => setMessage(event.target.value)}></textarea>
              </div>

              <div className="buttons text-center flex items-center justify-center lg:gap-5">
                <button className={buttonStyle}>
                  Send
                </button>
              </div>
              <p className="text-xl md:text-2xl text-secondary mt-3 text-center ">{text}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

export async function getServerSideProps() {

  const projectId = process.env.PROJECT_ID;
  const client = createClient({
    projectId: projectId,
    dataset: "production",
    useCdn: false
  });

  const quotesquery = `*[_type == "titlequotes"]`;
  const titlequotes = await client.fetch(quotesquery);


  return {
    props: {
      titlequotes

    }
  }
}