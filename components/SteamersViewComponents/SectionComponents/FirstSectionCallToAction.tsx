import styles from './FirstSectionCallToAction.module.scss'

function FirstSectionCallToAction() {
    return (
        <section className={`text-center py-4 ${styles['gray-gradient-background']}`}>
            <h3>The steamer that has taken America by storm now available for purchase online</h3>
            <button className='btn btn-success btn-lg mt-3'>GET YOURS NOW!</button>
        </section>
    )
}

export default FirstSectionCallToAction