import uniqid from "uniqid"
import NextLink from "next/link"

import { Steamer } from "@/model/Steamer"

import ProductCarousel from "../../ProductCarousel"

import CustomButton from "@/components/CustomButton"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface Props {
    steamers: Steamer[]
    steamerModel: 'besteam' | 'besteamXl'
}

function BesteamRow({
    steamers,
    steamerModel
}: Props) {
    return (
        <Row className="px-3 px-md-5">
            <Col xs={{ span: 12, order: 2 }} md={{ order: steamerModel === 'besteam' ? 1 : 2 }} lg={7} className='d-flex flex-column pt-2 pb-3 px-2 px-lg-5'>
                <h3 className="text-center text-custom-dark h2 mb-3 display-2 fw-semibold">{steamers[0].name}</h3>
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

                <div className="flex-grow-1">
                    <p className="text-custom-dark display-5 mb-0 mt-3 fw-semibold"> Package Includes:</p>
                    <ol>
                        {
                            steamers[0].packageIncludes.map((item, index) => {
                                return (
                                    <li key={uniqid()} className="text-custom-dark">{item}</li>
                                )
                            })
                        }
                    </ol>
                </div>

                <div className="text-center mt-3 ">
                    <p className="text-custom-dark display-3 fw-semibold">Now only ${steamers[0].price}</p>
                    
                    <NextLink href="/shop">
                        <CustomButton variant="primary" size="lg">GET YOURS NOW!</CustomButton>
                    </NextLink>
                </div>
            </Col>

            <Col xs={{ span: 12, order: 1 }} md={{ order: steamerModel === 'besteam' ? 2 : 1 }} lg={5} className='d-none d-lg-block mb-5'>
                <ProductCarousel
                    carouselId={steamerModel === 'besteam' ? 'carousel-besteam' : 'carousel-besteamXl'}
                    steamers={steamers}
                    indicatorLabels={
                        steamerModel === 'besteam'
                            ? ['blue', 'black', 'red', 'white']
                            : ['yellow', 'blue', 'black', 'red']
                    }
                />
            </Col>
        </Row>
    )
}

export default BesteamRow