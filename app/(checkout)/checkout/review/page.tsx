"use client"
import uniqid from "uniqid"
import NextLink from "next/link"

import { useCartContext } from "@/context/cartContext"

import DrawerProductCard from "@/components/Cart/Drawer/DrawerProductCard"
import CartTotal from "@/components/Cart/CartTotal"
import CustomButton from "@/components/Common/Buttons/CustomButton"
import IconChevronRight from "@/components/Icons/IconChevronRight"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"

function ReviewPage() {
	const { cart, setReviewedCart } = useCartContext()

	return (
		<Container as="section" className="py-5">
			<h4 className="mb-3">Please review your selected products:</h4>
			<Row className="gx-3 gy-4" >
				{
					cart.products.map((item) => (
						<Col xs={6} sm={4} md={3} lg={2} key={uniqid()}>
							<DrawerProductCard key={uniqid()} product={item} />
						</Col>
					))
				}
			</Row>

			<div className="mt-2 d-flex flex-column align-items-end">
				<CartTotal displaySize="display-5" />
				
				<NextLink href='/checkout/client-details' onClick={() => setReviewedCart(true)} className="mt-2">
					<CustomButton variant="primary">
						Continue to Client Details&nbsp;
						<IconChevronRight />
						</CustomButton>
				</NextLink>
			</div>
		</Container>
	)
}

export default isCartEmptyRouteGuard(ReviewPage)