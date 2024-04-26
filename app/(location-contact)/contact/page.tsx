import ContactForm from "@/components/ContactForm"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function ContactPage() {
	return (
		<div style={{ minHeight: '83vh' }} className="d-flex justify-content-center align-items-center py-5">
			<section className="container p-3 p-md-5 rounded-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
				<Row>
					<Col xs={12} md={5}>
						<h3 className="text-center display-3">Contact US</h3>
						<p style={{textAlign: 'justify'}}>Our main company objective is to provide liable, continuous, and excellent customer service for our consumers. We look forward to your suggestions, comments and questions regarding our product.</p>
						<p data-bs-theme="dark" className='text-muted'>*All form fields are required</p>

						<div className="w-50 mx-auto">
							<img src="/assets/img/logo/logo-transparent.png" className="img-fluid" alt="Contact us" />
						</div>
					</Col>
					<Col xs={12} md={7}>
						<ContactForm />
					</Col>
				</Row>
			</section>
		</div>
	)
}

export default ContactPage