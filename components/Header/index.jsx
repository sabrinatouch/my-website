// Header/index.jsx
'use client'

import React, { useState } from 'react'
import Button from './Button'
import styles from './style.module.scss'

export default function index() {
    // Creating a state to track if the menu is open or close
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}