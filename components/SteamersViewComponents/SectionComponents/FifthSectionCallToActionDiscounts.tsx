import CustomButton from "@/components/CustomButton"
import Link from "next/link"

function FifthSectionCallToActionDiscounts() {
    return (
        <section className="background-pattern-wool px-2 py-5">
            <div className="container background-gray-radial-gradient px-3 py-3">
                <div className="row gx-md-0">

                    <div className="col-4 col-md-3 col-lg-2 order-2 order-md-1 order-lg-1 d-flex justify-content-center align-items-center">
                        <img src="/assets/img/lifetime-warranty.png" alt="Lifetime Warranty" className="img-fluid" />
                    </div>

                    <div className="col-12 col-md-6 col-lg-7 order-1 order-md-2 order-lg-2 text-center d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-capitalize">Over the top quantity-based discounts</h3>

                        <Link href="/shop">
                            <CustomButton variant="success" classes="mt-md-2 mb-3">GET YOURS NOW!</CustomButton>
                        </Link>

                        <h3 className="text-capitalize">Lifetime Warranty</h3>
                    </div>

                    <div className="col-8 col-md-3 col-lg-3 order-3 d-flex justify-content-center align-items-center ">
                        <img src="/assets/img/multiple-steamers.png" className="img-fluid" alt="Multiple Steamers" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FifthSectionCallToActionDiscounts