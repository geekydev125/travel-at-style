"use client"
import { useRef } from 'react';

interface Props {
    videoSrc: string;
    posterSrc: string;
    classes?: string;
}

function BackgroundVideo({
    videoSrc,
    posterSrc,
    classes = 'w-100 h-100 object-fit-cover'
}:Props) {
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
                className={classes}
                poster={posterSrc}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </>
    )
}

export default BackgroundVideo