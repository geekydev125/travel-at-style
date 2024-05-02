"use client"
import isCartReviewedRouteGuard from "@/hoc/isCartReviewedRouteGuard"

import ClientDetailsForm from "@/components/Forms/ClientDetailsForm"

import Container from "react-bootstrap/Container"

function ClientDetailsPage() {
	return (
		<Container as="section" className="py-5">
			<ClientDetailsForm />

		</Container>
	)
}

export default isCartReviewedRouteGuard(ClientDetailsPage)