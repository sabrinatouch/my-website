// Nav/index.jsx

import React from 'react'
import { Links } from './data'
import styles from './style.module.scss'
import { motion } from 'framer-motion'

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: { 
            duration: 0.65,
            opacity: { duration: 0.35 },
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
}

export default function index() {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    Links.map( (link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div 
                                    href={href}
                                    custom={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                >
                                    <a>
                                        {title}
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}