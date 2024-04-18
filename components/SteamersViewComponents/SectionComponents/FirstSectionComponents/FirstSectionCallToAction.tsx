import NextLink from 'next/link'

import styles from './FirstSectionCallToAction.module.scss'
import GreenButton from '@/components/GreenButton'

function FirstSectionCallToAction() {
    return (
        <section className={`${styles.section} text-center px-3 py-3 py-lg-4 background-gray-gradient`} >
            <h3 className="display-5 text-capitalize">The steamer that has taken America by storm now available for purchase online</h3>

            <NextLink href='/shop'>
                <GreenButton classes='mt-1 mt-md-3'>
                    GET YOURS NOW!
                </GreenButton>
            </NextLink>
        </section>
    )
}

export default FirstSectionCallToAction