import React from 'react'

const Title = ({mainTitle,smallTitle}) => {
    return (
        <>
            <h2 className='font-bold md:text-3xl text-base text-center mt-5 flex items-center justify-center'> {mainTitle} </h2>
            <div className='italic text-secondary text-center mt-3'>{`<${smallTitle}🚀/>`}</div>
        </>
    )
}

export default Title