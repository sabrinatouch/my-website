// Nav/index.jsx

import React from 'react'
import { Links, FooterLinks } from './data'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

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

const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
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
                <Link 
                    activeClass="active"
                    to="home"
                    smooth={true}
                    spy={true}
                    style={{ cursor: 'pointer', fontSize: '18px' }}
                >
                    back to top
                </Link>
                {
                    Links.map( (link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div 
                                    custom={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                >
                                    {/* <a href={href}>
                                        {title}
                                    </a> */}
                                    <Link 
                                        activeClass="active"
                                        to={href} 
                                        smooth={true}
                                        spy={true}
                                        offset={-50}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {title}
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.footer}>
                {
                    FooterLinks.map( (link, i) => {
                        return (
                            <motion.a
                                key={`f_${i}`}
                                target="_blank"
                                href={link.href} 
                                variants={slideIn}
                                custom={i}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                            >
                                {link.title}
                            </motion.a>
                        )
                    })
                }
            </div>
        </div>
    )
}