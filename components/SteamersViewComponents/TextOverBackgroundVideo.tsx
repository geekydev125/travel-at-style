import styles from './TextOverBackgroundVideo.module.scss'

import React from 'react'
import IconDoubleDown from '../Icons/IconDoubleDown'

function TextOverBackgroundVideo() {
    return (
        <div className='text-center w-100 mb-5'>
            <h3 className='text-white text-uppercase'>The Revolutionary Travel Size Steamer From Italy</h3>
            <IconDoubleDown fill='white' classes={styles['animated-icon']} width='30px' height='30px' />
        </div>
    )
}

export default TextOverBackgroundVideo