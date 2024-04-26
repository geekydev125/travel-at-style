import NextLink from 'next/link'

import styles from './FirstSectionCallToAction.module.scss'
import CustomButton from '@/components/CustomButton'

function FirstSectionCallToAction() {
    return (
        <section className={`${styles.section} text-center px-3 py-3 py-lg-4 background-gray-radial-gradient`} >
            <h3 className="display-5 text-capitalize">The steamer that has taken America by storm now available for purchase online</h3>

            <NextLink href='/shop'>
                <CustomButton variant='primary' size='lg' classes='mt-1 mt-md-3'>
                    GET YOURS NOW!
                </CustomButton>
            </NextLink>
        </section>
    )
}

export default FirstSectionCallToAction