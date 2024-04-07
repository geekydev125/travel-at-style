"use client"
import { useRef } from 'react';

function HomeViewBackgroundVideo() {
    const videoRef = useRef<null | HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current != null) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <button onClick={handlePlay}>Play Video</button>

            <video
                poster="/assets/video/ny-timelapse/ny-timelapse-poster.jpg"
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/video/ny-timelapse/ny-timelapse.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

export default HomeViewBackgroundVideo