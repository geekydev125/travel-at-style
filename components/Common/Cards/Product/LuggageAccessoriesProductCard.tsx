import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"

import styles from "@/components/Pages/LuggageAccessories/ProductCard.module.scss"

import CardImage from "@/components/Common/Cards/CardImage"
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink"

import BootstrapCard from "react-bootstrap/Card"
import BootstrapCardBody from "react-bootstrap/CardBody"
import BootstrapCardTitle from "react-bootstrap/CardTitle"
import BootstrapCardText from "react-bootstrap/CardText"

interface Props {
    product: IAccessory | ILuggage
}

function LuggageAccessoriesProductCard({
    product,
}: Props) {
    return (
        <BootstrapCard className={`shadow-sm ${styles['accessory-card']} background-radial-gradient `}>
            <div className="m-2 rounded-1 overflow-hidden">
                <CardImage product={product} modalType="product" />
            </div>

            <BootstrapCardBody className="p-0 pt-3 d-flex flex-column justify-content-between" style={{ borderTop: '1px solid #f5f5f5' }}>
                <BootstrapCardTitle className="px-2 display-5 fw-semibold">{product.name}</BootstrapCardTitle>
                <div>
                    <BootstrapCardText className="px-2">
                        {product.description}
                    </BootstrapCardText>

                    <div className="background-light-gradient p-3 d-flex flex-row flex-sm-column flex-lg-row justify-content-between align-items-center ">
                        <BootstrapCardText className="display-5 fw-semibold mb-0">
                            ${product.price}
                        </BootstrapCardText>

                        <CustomButtonWithLink href={`/shop?tab=${product.productCategory}`} variant="primary">
                            GET YOURS NOW!
                        </CustomButtonWithLink>
                    </div>
                </div>
            </BootstrapCardBody>
        </BootstrapCard>
    )
}

export default LuggageAccessoriesProductCard