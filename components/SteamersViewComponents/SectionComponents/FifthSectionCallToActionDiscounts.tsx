import Link from "next/link"

function FifthSectionCallToActionDiscounts() {
    return (
        <section className="background-pattern-wool py-5">
            <div className="container background-gray-gradient px-3 py-3">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <img src="/assets/img/lifetime-warranty.png" alt="Lifetime Warranty" className="" />
                    </div>
                    <div className="col-md-7 text-center d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-custom-dark">OVER THE TOP QUANTITY BASED DISCOUNTS</h3>

                        <Link href="/shop">
                            <button className="btn btn-success btn-lg shadow mt-2 mb-3">GET YOURS NOW!</button>
                        </Link>

                        <h3 className="text-custom-dark">LIFETIME WARRANTY</h3>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center ">
                        <img src="/assets/img/multiple-steamers.png" className="mx-auto" alt="Multiple Steamers" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FifthSectionCallToActionDiscounts