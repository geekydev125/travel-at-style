"use client"
import uniqid from "uniqid"
import NextLink from "next/link"

import { useCartContext } from "@/context/cartContext"

import CartDrawerProductCard from "@/components/Cart/CartDrawerProductCard"
import CartTotal from "@/components/Cart/CartTotal"
import CustomButton from "@/components/CustomButton"
import IconChevronRight from "@/components/Icons/IconChevronRight"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function ReviewPage() {
	const { cart } = useCartContext()

	return (
		<Container as="section" className="py-5">
			<h4 className="text-custom-dark"> Please review your items</h4>
			<Row>

				{
					cart.map((item) => (
						<Col xs={3} key={uniqid()}>
							<CartDrawerProductCard key={uniqid()} product={item} />
						</Col>
					))
				}
			</Row>

			<div className="d-flex flex-row justify-content-between">
				<CartTotal />
				
				<NextLink href='/checkout/client-details'>
					<CustomButton variant="primary" size="sm">
						Continue&nbsp;
						<IconChevronRight />
						</CustomButton>
				</NextLink>
			</div>
		</Container>
	)
}

export default ReviewPage