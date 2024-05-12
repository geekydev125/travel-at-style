"use client"
import { useRef, useState } from 'react';

import { useInView, useScroll, useMotionValueEvent } from 'framer-motion'

import styles from '@/components/Icons/IconAnimatedScroll.module.scss'

function IconAnimatedScroll() {
    const imgRef = useRef(null);
    const isInView = useInView(imgRef, { once: true })
    const { scrollYProgress } = useScroll()
    const [hasScrolledEnough, setHasScrolledEnough] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.1102873030583874) {
            setHasScrolledEnough(true)
        } 
    })

    return (
        <img
            ref={imgRef}
            src="/assets/img/logo/scroll-down.gif"
            className={`${styles['scroll-down']} ${(isInView && !hasScrolledEnough) ? styles['show'] : 'opacity-0'}`}
            alt="scroll down"
        />
    )
}

export default IconAnimatedScroll