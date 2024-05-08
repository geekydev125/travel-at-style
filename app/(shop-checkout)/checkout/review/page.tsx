"use client"
import dynamic from "next/dynamic"
import NextLink from "next/link"

import { useCartContext } from "@/context/cartContext"

import CartTotal from "@/components/Cart/CartTotal"
import CustomButton from "@/components/Common/Buttons/CustomButton"
import IconChevronRight from "@/components/Icons/IconChevronRight"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"
import CartProductListPlaceholder from "@/components/Common/Placeholders/Cart/CartProductListPlaceholder"

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

			<div className="mt-2 d-flex flex-column align-items-end">
				<CartTotal displaySize="display-5" />

				<NextLink href='/checkout/client-details' onClick={() => setReviewedCart(true)} className="mt-2">
					<CustomButton variant="primary">
						Proceed to Client Details&nbsp;
						<IconChevronRight />
					</CustomButton>
				</NextLink>
			</div>
		</Container>
	)
}

export default isCartEmptyRouteGuard(ReviewPage)