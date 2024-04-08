"use client";
import { Parallax } from "react-parallax"

function ThirdSectionBesteamVideo() {
    return (
        <Parallax blur={0} bgImage="/assets/video/ny-timelapse/ny-timelapse-poster.jpg" bgImageAlt="Manufactoring Facility" strength={400} >
            <div className="text-center rounded " style={{padding: '80px', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <h3 className="mb-5">Check out Besteam in action!</h3>
                <iframe className='rounded-4' width="730" height="411" src="https://www.youtube.com/embed/_z4EY7BYz6M?si=VBu5hRD1S49iXrnf&amp;controls=0&showinfo=0" 
                title="Besteam Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
            </div>
        </Parallax>
    )
}

export default ThirdSectionBesteamVideo