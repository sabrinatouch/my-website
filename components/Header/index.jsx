// Header/index.jsx
'use client'

import React, { useState } from 'react'
import Button from './Button'
import styles from './style.module.scss'
import { motion } from 'framer-motion'

const variants = {
    open: {
        width: 480,
        height: 650
    },
    closed: {
        width: 100,
        height: 40
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

            </motion.div>

            <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}