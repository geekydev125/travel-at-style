import Container from "react-bootstrap/Container"

function PaymentPage() {
	return (
		<Container as="section" className="mb-5 my-lg-5 py-lg-5 d-flex flex-column justify-content-center align-items-center">
			
			<p className="mt-5 display-4 text-danger fw-semibold text-center">Travel @ Style is not accepting orders at this time. </p>
			<p className="display-5 text-custom-dark text-center">Please accept our apologies for the inconvenience.</p>

			<div className="mt-4 d-flex flex-column flex-sm-row align-items-center" >
				<p className="display-5 text-custom-dark">Sincerely,</p>
				<img src="/assets/img/logo/logo-transparent.png" alt="Travel @ Style" className="img-fluid" style={{maxHeight: '130px'}} />
			</div>
		</Container>
	)
}

export default PaymentPage