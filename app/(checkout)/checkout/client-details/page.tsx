"use client"
import ClientDetailsForm from "@/components/Forms/ClientDetailsForm"
import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"

import Container from "react-bootstrap/Container"

function ClientDetailsPage() {
	return (
		<Container as="section" className="py-5">
			<ClientDetailsForm />

		</Container>
	)
}

export default isCartEmptyRouteGuard(ClientDetailsPage)