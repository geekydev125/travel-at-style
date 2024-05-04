"use client"
import { Parallax } from "react-parallax"

interface Props {
    children: React.ReactNode
}

function ParallaxContainer({
    children
}: Props) {
    return (
        <Parallax blur={3} bgImage="/assets/img/ny-skyline.jpg" bgImageAlt="New York at night" strength={200} >
            {children}
        </Parallax>
    )
}

export default ParallaxContainer