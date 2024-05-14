
import styles from './CallToAction.module.scss'

import CustomButtonWithLink from '@/components/Common/Buttons/CustomButtonWithLink'

function CallToAction() {
    return (
        <section className={`${styles.section} text-center px-3 py-3 py-lg-4 background-blue-radial-gradient position-relative`} >
            <p className="text-uppercase text-light mb-1 display-6">The steamer that has taken America by storm - now available for purchase online!</p>

            <CustomButtonWithLink href='/shop' variant='primary' classesButton='mt-1 mt-md-2'>
                GET YOURS NOW!
            </CustomButtonWithLink>

        </section>
    )
}

export default CallToAction