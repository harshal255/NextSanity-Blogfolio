import React from 'react'
import Title from './components/Title';


const TechnologyUsed = [
    {
        id: "1",
        imgurl: "images/Technology/next2.png",
        type: "Next.js",
    },
    {
        id: "2",
        imgurl: "images/Technology/sanity.png",
        type: "Sanity.io",
    },
    {
        id: "3",
        imgurl: "images/Technology/tailwind.png",
        type: "Tailwind CSS",
    },
    {
        id: "4",
        imgurl: "images/Technology/framer-motion.png",
        type: "Framer Motion",
    },
    {
        id: "5",
        imgurl: "images/Technology/react.png",
        type: "React.js",
    },
    {
        id: "6",
        imgurl: "images/Technology/node.png",
        type: "Node.js",
    },
]


const Technology = () => {
    return (
        <div className='mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20' id='Technology'>
            <Title mainTitle="" smallTitle="Technology stack"></Title>
            <section className="">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">

                    <div className="grid grid-cols-6 gap-3 text-secondary sm:gap-10 dark:text-secondary">
                        {
                            TechnologyUsed.map((element) => {
                                return (
                                    <div className="flex justify-center items-center rounded-[25%] overflow-clip" key={element.id}>
                                        <img src={element.imgurl} alt={element.type} />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technology