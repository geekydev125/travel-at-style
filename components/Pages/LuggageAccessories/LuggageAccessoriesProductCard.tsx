import NextLink from "next/link"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"

import styles from "@/components/Pages/LuggageAccessories/LuggageAccessoriesProductCard.module.scss"

import CustomButton from "@/components/Common/Buttons/CustomButton"

import Card from "react-bootstrap/Card"
import CardBody from "react-bootstrap/CardBody"
import CardTitle from "react-bootstrap/CardTitle"
import CardImg from "react-bootstrap/CardImg"
import CardText from "react-bootstrap/CardText"

interface Props {
    product: Accessory | Luggage
}

function LuggageAccessoriesProductCard({
    product,
}: Props) {
    return (
        <Card className={`shadow-sm ${styles['accessory-card']} background-radial-gradient `}>
            <div className="m-2 rounded-1 overflow-hidden">
                <CardImg
                    variant="top"
                    className={`object-fit-cover ${styles['accessory-card-img']}`}
                    src={`/assets/img/${product.imgFolder}/${product.img}`}
                    alt={product.name}
                />
            </div>

            <CardBody className="p-0 pt-3 d-flex flex-column justify-content-between" style={{borderTop: '1px solid #f5f5f5'}}>
                <CardTitle className="px-2 display-5 fw-semibold">{product.name}</CardTitle>
                <div>
                    <CardText className="px-2">
                        {product.description}
                    </CardText>

                    <div className="background-light-gradient p-3 d-flex flex-row flex-sm-column flex-lg-row justify-content-between align-items-center ">
                        <CardText className="display-5 fw-semibold mb-0">
                            ${product.price}
                        </CardText>
                        <NextLink href={`/shop?tab=${product.productCategory}`} >
                            <CustomButton variant="primary">GET YOURS NOW!</CustomButton>
                        </NextLink>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default LuggageAccessoriesProductCard