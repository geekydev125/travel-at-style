import { memo } from "react"
import uniqid from "uniqid"

import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"
import { ISteamer } from "@/model/Steamer"

import ShopCard from "@/components/Common/Cards/Shop/ShopCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface Props {
    products: ISteamer[] | ILuggage[] | IAccessory[]
}

function ShopProductTabContent({
    products
}: Props) {
    return (
        <>
            <p>
                <small className='text-muted'>*Click on product's image/name for more info</small>
            </p>
            <Container>
                <Row className='gx-3 gx-lg-4 gy-4'>
                    {products.map((product) => {
                        return (
                            <Col xs={12} sm={6} lg={4} key={uniqid()}>
                                <ShopCard product={product} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default memo(ShopProductTabContent)