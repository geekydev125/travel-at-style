"use client"
import uniqid from "uniqid"

import { useCartContext } from "@/context/cartContext"

import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"

import CartDrawerProductCard from "@/components/Cart/CartDrawerProductCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function CheckoutPage() {
	const { cart } = useCartContext()

	return (
		<Container as="section" className="py-5">
			<Row>
				{
					cart.map((item, index) => (
						<Col xs={6} key={uniqid()}>
							<CartDrawerProductCard key={uniqid()} product={item} />
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default isCartEmptyRouteGuard(CheckoutPage)