import { Metadata } from "next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const metadata: Metadata = {
    title: "Steamers Warranty",
}

function WarrantyPage() {
	return (
		<Container as='section' className="py-5">
			<Row className="pt-lg-4">
				<Col sm={9}>
					<h3 className="text-custom-dark">Warranty</h3>

					<div className="ps-md-4">
						<p className="text-custom-dark">If you experience a manufacturing defect in materials, <span className="fst-italic text-custom-dark">Travel @ Style</span> warrants your steamer  and all of your accessories for the lifetime of the product. We will repair or replace the product at no charge.</p>

						<p className="text-custom-dark">To receive your warranty&nbsp;
							<a href="http://www.besteamitaly.com/warranty" target="_blank">CLICK HERE</a>
						</p>
					</div>

				</Col>
				<Col sm={3} className="d-flex flex-column justify-content-center justify-content-md-start align-items-center">
					<a href="http://www.besteamitaly.com/warranty" target="_blank">
						<img src="/assets/img/lifetime-warranty.png" className="img-fluid mt-md-5 mt-lg-0 mx-auto" alt="Lifetime Warranty Logo" />
					</a>
				</Col>
			</Row>
		</Container>
	)
}

export default WarrantyPage