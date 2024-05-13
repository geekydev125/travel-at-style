"use client"
import dynamic from "next/dynamic"

import { useCartContext } from "@/context/cartContext"

import CartTotal from "@/components/Cart/CartTotal"
import IconChevronRight from "@/components/Icons/IconChevronRight"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"
import CartProductListPlaceholder from "@/components/Common/Placeholders/Cart/CartProductListPlaceholder"
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink"

const DynamicCartProductsList = dynamic(() => import("@/components/Cart/CartProductsList"), {
	loading: () => <CartProductListPlaceholder displayOn="checkout" />,
	ssr: false
})

function ReviewPage() {
	const { setReviewedCart } = useCartContext()

	return (
		<Container as="section" className="py-5">
			<h4 className="mb-3">Please review your selected products:</h4>
			<Row className="gx-3 gy-4" >
				<DynamicCartProductsList displayOn="checkout" />
			</Row>

			<div className="mt-5 d-flex flex-column align-items-end">
				<CartTotal displaySize="display-5" />

				<CustomButtonWithLink href='/checkout/client-details' onClick={() => setReviewedCart(true)} classesLink="mt-2" variant="primary">
					Proceed to Client Details&nbsp;
					<IconChevronRight />
				</CustomButtonWithLink>
			</div>
		</Container>
	)
}

export default isCartEmptyRouteGuard(ReviewPage)