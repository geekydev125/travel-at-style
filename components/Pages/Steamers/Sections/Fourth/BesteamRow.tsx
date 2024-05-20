"use client"
import uniqid from "uniqid"
import { ISteamer } from "@/model/Steamer"
import ProductCarousel from "@/components/Pages/Steamers/Sections/Fourth/ProductCarousel"
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink"
import AirplaneLoader from "@/components/Common/Loader/AirplaneLoader"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { baseUrl } from "@/lib/baseUrl"
import { useEffect, useState } from "react"
interface Props {
    steamerModel: 'besteam' | 'besteamXL'
}
async function BesteamRow({
    steamerModel
}: Props) {
    const [steamers, setSteamers] = useState<ISteamer[] | []>([])
    useEffect(() => {
        fetch(`${baseUrl}/api/products/steamers/${steamerModel}`)
            .then(response => response.json())
            .then(data => {
                setSteamers(data)
            })
    }, [])
    
    const indicatorLabels = steamers.map((steamer) => steamer.color)
    return steamers.length === 0
        ? <AirplaneLoader />
        : (
            <Row className="px-3 px-md-5">
                <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: steamerModel === 'besteam' ? 1 : 2 }} className='d-flex flex-column pt-2 pb-3 px-2 px-lg-5'>
                    <h3 className="text-center  h2 mb-3 display-2 fw-semibold">{steamers[0]?.name}</h3>
                    <p>{steamers[0]?.description}</p>
                    <div className={`d-md-none w-75 mx-auto mt-2 mb-4`}>
                        <ProductCarousel
                            steamerModel={steamerModel}
                            steamers={steamers}
                            indicatorLabels={indicatorLabels}
                        />
                    </div>
                    <div className="flex-grow-1">
                        <p className=" display-5 mb-0 mt-3 fw-semibold"> Package Includes:</p>
                        <ol>
                            {
                                steamers[0]?.packageIncludes.map((item) => {
                                    return (
                                        <li key={uniqid()}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <div className="text-center mt-3 ">
                        <p className=" display-4 fw-semibold">Now only ${steamers[0]?.price}</p>
                        <CustomButtonWithLink href="/shop" variant="primary">
                            GET YOURS NOW!
                        </CustomButtonWithLink>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: steamerModel === 'besteam' ? 2 : 1 }} className='d-none d-md-block mb-5 mt-md-5 mt-lg-0'>
                    <ProductCarousel
                        steamerModel={steamerModel}
                        steamers={steamers}
                        indicatorLabels={indicatorLabels}
                    />
                </Col>
            </Row>
        )
}
export default BesteamRow