import uniqid from "uniqid"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import ShopProductCard from "@/components/Pages/Shop/ShopCard/ShopCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface Props {
    products: Steamer[] | Luggage[] | Accessory[]
}

function ShopProductTab({
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
                                <ShopProductCard product={product} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default ShopProductTab