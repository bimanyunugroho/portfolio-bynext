import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
            type: 'spring',
        }}
        className='flex flex-row items-center'>
            <SocialIcon
                url="https://github.com/devabi-deploy"
                fgColor='#292C35'
                bgColor='transparent'
            />
            <SocialIcon
                url="https://instagram.com/abimanyucode"
                fgColor='#292C35'
                bgColor='transparent'
            />
            <SocialIcon
                url="https://youtube.com/abimanyucode"
                fgColor='#292C35'
                bgColor='transparent'
            />
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 2,
            type:'spring',
        }}
        className='flex flex-row items-center text-gray-500 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                url="https://id.linkedin.com/in/bimanyu-nugroho-firmansyah"
                fgColor='#292C35'
                bgColor='transparent'
            />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 font-bold'>Touch Me!</p>
        </motion.div>
    </header>
  )
}

export default Header