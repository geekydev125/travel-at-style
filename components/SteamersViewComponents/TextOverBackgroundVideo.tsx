import styles from './TextOverBackgroundVideo.module.scss'

import React from 'react'
import IconDoubleDown from '../Icons/IconDoubleDown'

function TextOverBackgroundVideo() {
    return (
        <div style={{height: '70vh'}} className=' d-flex flex-column justify-content-end align-items-center w-100 mb-5'>
            <h3 className='text-uppercase'>The Revolutionary Travel Size Steamer From Italy</h3>
            <IconDoubleDown fill='#f5f5f5' classes={styles['animated-icon']} width='30px' height='30px' />
        </div>
    )
}

export default TextOverBackgroundVideo