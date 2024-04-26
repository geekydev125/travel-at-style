import uniqid from "uniqid"

import { Steamer } from "@/model/Steamer"
import ProductCarousel from "../../ProductCarousel"

import CustomButton from "@/components/CustomButton"

interface Props {
    steamers: Steamer[]
    steamerModel: 'besteam' | 'besteamXl'
}

function BesteamRow({
    steamers,
    steamerModel
}: Props) {
    return (
        <div className="row px-3 px-md-5">

            <div className={`col-12 col-lg-7 order-2 d-flex flex-column justify-content-between py-3 px-2 px-lg-5 ${steamerModel === 'besteam' ? "order-md-1" : 'order-md-2'}`}>
                <h3 className="text-center text-custom-dark h2 mb-3 display-3 fw-bold">{steamers[0].name}</h3>
                <p className="text-custom-dark">{steamers[0].description}</p>

                <div className={`d-lg-none w-75 mx-auto mt-2 mb-4`}>
                    <ProductCarousel
                        carouselId={steamerModel === 'besteam' ? 'carousel-besteam' : 'carousel-besteamXl'}
                        steamers={steamers}
                        indicatorLabels={
                            steamerModel === 'besteam'
                                ? ['blue', 'black', 'red', 'white']
                                : ['yellow', 'blue', 'black', 'red']
                        }
                    />
                </div>

                <p className="text-custom-dark display-5 mb-0 mt-3"> Package Includes:</p>
                <ol>
                    {
                        steamers[0].packageIncludes.map((item, index) => {
                            return (
                                <li key={uniqid()} className="text-custom-dark">{item}</li>
                            )
                        })
                    }
                </ol>

                <div className="text-center mt-3">
                    <p className="text-custom-dark display-3 fw-semibold">Now only ${steamers[0].price}</p>
                    <CustomButton variant="primary" size="lg">GET YOURS NOW!</CustomButton>
                </div>
            </div>

            <div className={`col-12 col-lg-5 d-none d-lg-block mb-5 order-1 ${steamerModel === 'besteam' ? "order-md-2" : 'order-md-1'}`}>
                <ProductCarousel
                    carouselId={steamerModel === 'besteam' ? 'carousel-besteam' : 'carousel-besteamXl'}
                    steamers={steamers}
                    indicatorLabels={
                        steamerModel === 'besteam'
                            ? ['blue', 'black', 'red', 'white']
                            : ['yellow', 'blue', 'black', 'red']
                    }
                />
            </div>
        </div>
    )
}

export default BesteamRow