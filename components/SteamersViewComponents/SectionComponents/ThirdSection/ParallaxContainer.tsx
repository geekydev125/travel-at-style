"use client"
import { useEffect, useState } from "react"
import { Parallax } from "react-parallax"

interface Props {
    children: React.ReactNode
}

function ParallaxContainer({
    children
}: Props) {
    const [bgImage, setBgImage] = useState<string>('')

    useEffect(()=> {
        setBgImage('/assets/img/ny-skyline.jpg')
    })

    return (
        <Parallax bgImage={bgImage} bgImageAlt="New York at night" strength={200} >
            {children}
        </Parallax>
    )
}

export default ParallaxContainer