import ParallaxContainer from './ParallaxContainer'

import styles from './BesteamVideo.module.scss'
import BesteamVideo from './BesteamVideo'

function BesteamVideoContainer() {
    return (
        <div className='background-ny-skyline'>
            <ParallaxContainer>
                <div className={`${styles['container-div']} text-center rounded py-5 py-lg-5 px-3 position-relative `}>
                    <h3
                        className="d-none d-lg-block text-light fw-semibold text-uppercase display-3 position-absolute"
                        style={{ transform: 'rotate(-90deg) translateY(-50%)', left: '-100px', top: "45%" }}
                    >
                        Besteam in action!
                    </h3>

                    <div className={styles['video-frame-container']}>
                        <BesteamVideo />
                    </div>

                </div>
            </ParallaxContainer>
        </div>
    )
}

export default BesteamVideoContainer