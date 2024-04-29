import ClientDetailsForm from "@/components/ClientDetailsViewComponents/ClientDetailsForm"
import Container from "react-bootstrap/Container"

function ClientDetailsPage() {
	return (
		<Container as="section" className="py-5">
			<ClientDetailsForm />

		</Container>
	)
}

export default ClientDetailsPage