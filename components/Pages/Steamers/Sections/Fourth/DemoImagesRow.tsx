import styles from "./DemoImagesRow.module.scss"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function DemoImagesRow() {
    return (
        <Row className={`${styles.imagesRow}`}>
            <Col xs={4} className="px-0">
                <img src="/assets/img/step1.jpg" alt="Steaming demo step 1" className="w-100" />
            </Col>
            <Col xs={4} className="px-0">
                <img src="/assets/img/step2.jpg" alt="Steaming demo step 2" className="w-100" />
            </Col>
            <Col xs={4} className="px-0">
                <img src="/assets/img/step3.jpg" alt="Steaming demo step 3" className="w-100" />
            </Col>
        </Row>
    )
}

export default DemoImagesRow