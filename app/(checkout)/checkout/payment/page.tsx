import Container from "react-bootstrap/Container"

function PaymentPage() {
	return (
		<Container as="section" style={{height: '40vh'}} className="py-5 d-flex flex-column justify-content-center align-items-center">
			
			<p className="mt-5 display-4 text-danger fw-semibold">Travel @ Style is not accepting orders at this time. </p>
			<p className="display-5 text-custom-dark">Please accept our apologies for the inconvenience.</p>

			<div className="mt-4 d-flex flex-row align-items-center">
				<p className="display-5 text-custom-dark">Sincerely,</p>
				<img src="/assets/img/logo/logo-transparent.png" alt="Travel @ Style" className="img-fluid ms-lg-3" style={{height: '130px'}} />
			</div>
		</Container>
	)
}

export default PaymentPage