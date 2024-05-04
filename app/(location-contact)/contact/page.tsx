import { Metadata } from "next"

import ContactForm from "@/components/Forms/ContactForm"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const metadata: Metadata = {
    title: "Contact",
}

function ContactPage() {
	return (
		<div style={{ minHeight: '83vh' }} className="d-flex justify-content-center align-items-center px-2 py-5">
			<Container as='section' className="p-3 p-md-5 rounded-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
				<Row>
					<Col xs={12} md={5}>
						<h3 className="text-center display-3 text-light">Contact US</h3>
						<p className="text-light" style={{textAlign: 'justify'}}>Our main company objective is to provide liable, continuous, and excellent customer service for our consumers. We look forward to your suggestions, comments and questions regarding our product.</p>
						<p data-bs-theme="dark" className='text-muted'>*All form fields are required</p>

						<div className="w-50 mx-auto d-none d-md-block">
							<img src="/assets/img/logo/logo-transparent.png" className="img-fluid" alt="Contact us" />
						</div>
					</Col>
					<Col xs={12} md={7}>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactPage