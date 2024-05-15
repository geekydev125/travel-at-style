import uniqid from "uniqid"

import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"
import { ISteamer } from "@/model/Steamer"

import ShopCard from "@/components/Common/Cards/Shop/ShopCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "./Common/Cards/Product/ProductCard"

interface Props {
    products: ISteamer[] | ILuggage[] | IAccessory[]
    cardType: "shop" | "product"
}

function ProductsContent({
    products,
    cardType
}: Props) {
    return (
        <>
            <p>
                <small className='text-muted'>*Click on product's image/name for more info</small>
            </p>
            <Container className="px-0">
                <Row className='gx-2 gx-lg-4 gy-4'>
                    {products.map((product) => {
                        return (
                            <Col xs={6} sm={6} lg={4} key={uniqid()}>
                                {cardType === "product" && <ProductCard product={product} />}
                                {cardType === "shop" && <ShopCard product={product} /> }
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default ProductsContent