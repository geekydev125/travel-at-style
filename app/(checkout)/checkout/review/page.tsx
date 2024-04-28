"use client"
import uniqid from "uniqid"

import { useCartContext } from "@/context/cartContext"

import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"

import CartDrawerProductCard from "@/components/Cart/CartDrawerProductCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CartTotal from "@/components/Cart/CartTotal"

function ReviewPage() {
	const { cart } = useCartContext()

	return (
		<Container as="section" className="py-5">
			<h4 className="text-custom-dark"> Please review your items</h4>
			<Row>

				{
					cart.map((item, index) => (
						<Col xs={3} key={uniqid()}>
							<CartDrawerProductCard key={uniqid()} product={item} />
						</Col>
					))
				}

				<CartTotal />
			</Row>
		</Container>
	)
}

export default isCartEmptyRouteGuard(ReviewPage)