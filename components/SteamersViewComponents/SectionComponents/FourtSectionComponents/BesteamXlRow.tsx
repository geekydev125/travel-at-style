import uniqid from "uniqid"

import { Steamer } from "@/model/Steamer"
import ProductCarousel from "../../ProductCarousel"

interface Props {
    steamerModel: Steamer
}
function BesteamXlRow({
    steamerModel
}: Props) {
    return (
        <div className="row px-3 px-md-5">
            <div className="col-12 col-md-5 mb-5 mt-3 mt-md-0">
                <ProductCarousel
                    carouselId={'carousel-besteamXl'}
                    steamerModel={steamerModel}
                    indicatorLabels={['yellow', 'blue', 'black', 'red']}
                />
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-between py-3 px-md-5">
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
                    <p className="text-custom-dark h1">Now only ${steamerModel.price}</p>
                    <button className='btn btn-success btn-lg shadow-sm mt-3'>GET YOURS NOW!</button>
                </div>
            </div>

        </div>
    )
}

export default BesteamXlRow