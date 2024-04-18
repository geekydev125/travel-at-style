"use client";
import { Parallax } from "react-parallax"

import styles from './ThirdSectionBesteamVideo.module.scss'

function ThirdSectionBesteamVideo() {
    return (
        <Parallax blur={3} bgImage="/assets/img/ny-skyline.jpg" bgImageAlt="New York at night" strength={100} >
            <div className={`${styles['container-div']} text-center rounded py-5 py-lg-5 px-3`}>
                <h3 className="mb-3 mb-lg-5 text-custom-light text-capitalize">Check out Besteam in action!</h3>
                <iframe className={`${styles.iframe} rounded-4`} src="https://www.youtube.com/embed/_z4EY7BYz6M?si=VBu5hRD1S49iXrnf&amp;controls=0&showinfo=0" 
                title="Besteam Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
            </div>
        </Parallax>
    )
}

export default ThirdSectionBesteamVideo