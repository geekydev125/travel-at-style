import Map from "@/components/Map"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function LocationPage() {
	return (
		<>
			<Container as='section' style={{ height: '55vh' }}>
				<Row className='h-100'>
					<Col xs={{ span: 10, offset: 1 }} sm={{ span: 7, offset: 0 }} md={5} lg={4} xl={3}
						className='d-flex flex-column justify-content-center align-items-center shadow-lg'
						style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
					>
						<div className='py-3 w-100 d-flex flex-column justify-content-center align-items-center'>
							<h3 className="display-3 d-inline-block text-custom-light">Shop Location</h3>

							<ul className="list-unstyled text-start text-custom-light">
								<li>Fulton Center (lower level)</li>
								<li>200 Broadway</li>
								<li>New York, NY 10038</li>
							</ul>
						</div>

						<div className='py-4 text-center' style={{ borderTop: '1px solid white', borderBottom: '1px solid white' }}>
							<h6 className="text-custom-light">Subway Trains to Fulton Center</h6>
							<img src="/assets/img/ny-subway-trains.png" className="img-fluid" alt="Fulton center trains" />
						</div>
					</Col>
				</Row>
			</Container>

			<Map />
		</>
	)
}

export default LocationPage