import Link from "next/link"

import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"
import styles from "./ProductCard.module.scss"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

interface Props {
    product: Accessory | Luggage
}

function ProductCard({
    product,
}: Props) {
    return (
        <Card className={`shadow-sm ${styles['accessory-card']}`}>
            <div className="m-2 rounded-1 overflow-hidden">
                <Card.Img
                    variant="top"
                    className={`object-fit-cover ${styles['accessory-card-img']}`}
                    src={`/assets/img/${product.imgFolder}/${product.img}`}
                    alt={product.name}
                />
            </div>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-custom-dark">
                    {product.description}
                </Card.Text>
                <Card.Text className="text-custom-dark h4">
                    ${product.price}
                </Card.Text>

                <div className="d-flex justify-content-center">
                    <Link href="/shop" className="text-center">
                        <Button variant="success" className="">GET YOURS NOW!</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProductCard