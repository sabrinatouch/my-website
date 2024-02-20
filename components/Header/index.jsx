// Header/index.jsx
'use client'

import React, { useState } from 'react'
import Button from './Button'
import styles from './style.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav';

const variants = {
    open: {
        width: 480,
        height: "calc(100vh - 48px)",
        // for these top, right properties to work, make sure to add position: relative in scss
        top: "-25px",
        right: "-25px",
        transition: {duration: 0.65, ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: 100,
        height: 40,
        top: "0px",
        right: "0px",
        transition: {duration: 0.65, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
    }
}

export default function index() {
    // Creating a state to track if the menu is open or close
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <motion.div 
                className={styles.menu}
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>

            <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}