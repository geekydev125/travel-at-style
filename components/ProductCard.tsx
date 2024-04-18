import NextLink from "next/link"

import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"
import styles from "./ProductCard.module.scss"
import GreenButton from "@/components/GreenButton"

import Card from "react-bootstrap/Card"

interface Props {
    product: Accessory | Luggage
}

function ProductCard({
    product,
}: Props) {
    return (
        <Card className={`shadow-sm ${styles['accessory-card']} background-radial-gradient `}>
            <div className="m-2 rounded-1 overflow-hidden">
                <Card.Img
                    variant="top"
                    className={`object-fit-cover ${styles['accessory-card-img']}`}
                    src={`/assets/img/${product.imgFolder}/${product.img}`}
                    alt={product.name}
                />
            </div>

            <Card.Body className="p-0 pt-3 d-flex flex-column justify-content-between" style={{borderTop: '1px solid #f5f5f5'}}>
                <Card.Title className="px-2 display-5 fw-semibold">{product.name}</Card.Title>
                <div>
                    <Card.Text className="text-custom-dark px-2">
                        {product.description}
                    </Card.Text>

                    <div className="background-light-gradient p-3 d-flex flex-row flex-sm-column flex-lg-row justify-content-between align-items-center ">
                        <Card.Text className="text-custom-dark display-5 fw-semibold mb-0">
                            ${product.price}
                        </Card.Text>
                        <NextLink href="/shop" >
                            <GreenButton >GET YOURS NOW!</GreenButton>
                        </NextLink>

                        {/* <div className="d-flex justify-content-center">

                        </div> */}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard