"use client"
import isCartEmptyRouteGuard from "@/hoc/isCartEmptyRouteGuard"

function CheckoutPage() {

  return (
    <div className="text-custom-dark py-5">Checkout page</div>
  )
}

export default isCartEmptyRouteGuard(CheckoutPage)