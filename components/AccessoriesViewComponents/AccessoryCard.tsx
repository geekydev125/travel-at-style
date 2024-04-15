import Link from "next/link"

import { Accessory } from "@/model/Accessory"
import styles from "./AccessoryCard.module.scss"

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

interface Props {
    accessory: Accessory
}

function AccessoryCard({
    accessory
}: Props) {
    return (
        <Card className={`shadow-sm ${styles['accessory-card']}`}>
            <div className="m-2 rounded-1 overflow-hidden">
                <Card.Img
                    variant="top"
                    className={`object-fit-cover ${styles['accessory-card-img']}`}
                    src={`/assets/img/${accessory.imgFolder}/${accessory.img}`}
                    alt={accessory.name}
                />
            </div>
            <Card.Body>
                <Card.Title>{accessory.name}</Card.Title>
                <Card.Text className="text-custom-dark">
                    {accessory.description}
                </Card.Text>
                <Card.Text className="text-custom-dark h4">
                    ${accessory.price}
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

export default AccessoryCard