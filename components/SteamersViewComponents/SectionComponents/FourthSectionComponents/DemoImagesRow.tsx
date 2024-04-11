import styles from "./DemoImagesRow.module.scss"

function DemoImagesRow() {
    return (
        <div className={`row ${styles.imagesRow}`}>
            <div className="col-4 col-sm-4 px-0">
                <img src="/assets/img/step1.jpg" alt="Steaming demo step 1" className="w-100" />
            </div>
            <div className="col-4 col-sm-4 px-0">
                <img src="/assets/img/step2.jpg" alt="Steaming demo step 2" className="w-100" />
            </div>
            <div className="col-4 col-sm-4 px-0">
                <img src="/assets/img/step3.jpg" alt="Steaming demo step 3" className="w-100" />
            </div>
        </div>
    )
}

export default DemoImagesRow