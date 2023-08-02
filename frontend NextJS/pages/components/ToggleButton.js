import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const ToggleButton = ({ position }) => {
    const { theme, setTheme } = useTheme()
    return (
        <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-1.5 rounded-full cursor-pointer transition-colors mx-3 duration-300 bg-white dark:bg-black ${position} top-5 right-5`}>
            {theme === 'dark' ? <FiSun /> : <FiMoon className='text-black' />}
        </div>
    )
}

export default ToggleButton