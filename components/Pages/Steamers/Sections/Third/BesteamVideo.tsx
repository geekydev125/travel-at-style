"use client"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function BesteamVideo() {
    return (
        <LiteYouTubeEmbed
            id="_z4EY7BYz6M"
            title="Besteam Video"
            params='showinfo=0&rel=0'
            playlist={false}
        />
    )
}

export default BesteamVideo