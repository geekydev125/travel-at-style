import uniqid from "uniqid"

import { Steamer } from "@/model/Steamer"
import ProductCarousel from "../../ProductCarousel"

interface Props {
    steamerModel: Steamer
}

function BesteamRow({
    steamerModel
}:Props) {
    return (
        <div className="row px-3 px-md-5">
            <div className="col-12 col-md-7 order-2 order-md-1 d-flex flex-column justify-content-between py-3 px-md-5">
                <h3 className="text-center text-custom-dark h2 mb-3">{steamerModel.name}</h3>
                <p className="text-custom-dark">{steamerModel.description}</p>

                <h4 className="text-custom-dark"> Package Includes:</h4>
                <ol>
                    {
                        steamerModel.packageIncludes.map((item, index) => {
                            return (
                                <li key={uniqid()} className="text-custom-dark">{item}</li>
                            )
                        })
                    }
                </ol>

                <div className="text-center">
                    <p className="text-custom-dark h1">Now only ${steamerModel.variants[0].price}</p>
                    <button className='btn btn-success btn-lg shadow-sm mt-3'>GET YOURS NOW!</button>
                </div>
            </div>

            <div className="col-12 col-md-5 mb-5 order-1 order-md-2">
                <ProductCarousel
                    carouselId={'carousel-besteam'}
                    steamerModel={steamerModel}
                    indicatorLabels={['blue', 'black', 'red', 'white']}
                />
            </div>
        </div>
    )
}

export default BesteamRow