"use client"
import { useRef } from 'react';
import styles from './BackgroundVideo.module.scss'

function BackgroundVideo() {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <button className='d-none' onClick={handlePlay}>Play Video</button>

            <video
                className={styles.video}
                poster='/assets/video/besteam/besteam-poster.jpg'
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src='/assets/video/besteam/besteam.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </>
    )
}

export default BackgroundVideo