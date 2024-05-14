
import styles from './CallToAction.module.scss'

import CustomButtonWithLink from '@/components/Common/Buttons/CustomButtonWithLink'

function CallToAction() {
    return (
        <section className={`${styles.section} text-center px-3 py-3 py-lg-4 background-blue-radial-gradient position-relative`} >
            <h3 className="text-uppercase text-light">The steamer that has taken America by storm is now available for purchase online</h3>

            <CustomButtonWithLink href='/shop' variant='primary' size='lg' classesButton='mt-1 mt-md-3'>
                GET YOURS NOW!
            </CustomButtonWithLink>

        </section>
    )
}

export default CallToAction