import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer
            style={{ backgroundImage: `url('/assets/img/patterns/wood-pattern.jpg')`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}
            className='py-3'
        >
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className='text-center'>
                    <p className="text-white mb-0">
                        <span className='pe-1'>&copy; {new Date().getFullYear()}</span>
                        All rights reserved to
                        <span className='fst-italic'> Travel at Style</span>
                    </p>
                    <p className="text-white mb-0">
                    <span className='pe-1 text-muted'>Powered by</span>
                        <a href="http://www.arielbehar.com">
                            Ariel Behar
                            <Image src='/assets/img/logo/arielbehar-logo.png' alt='Ariel Behar Logo' width={18} height={18} className='ms-2' />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer