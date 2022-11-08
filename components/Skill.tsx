import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft: boolean;
    source: string
}

export default function Skill({directionLeft, source}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                // x: ,
                y: -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            // viewport={{ once: true }}
            src={ source }
            alt='skills'
            className='w-24 h-24 xl:w-24 xl:h-24 filter group-hover:grayscale
             transition duration-200 ease-in-out object-contain'
        />
    </div>
  )
}