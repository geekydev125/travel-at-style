
import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"
import { ISteamer } from "@/model/Steamer"

import CardPrice from "@/components/Common/Cards/CardPrice"
import CardImage from "@/components/Common/Cards/CardImage"
import CardButtons from "@/components/Common/Cards/CardButtons"
import CardContainer from "@/components/Common/Cards/CardContainer"

interface Props {
    product: ILuggage | IAccessory | ISteamer
}

function ShopCard({
    product,
}: Props) {

    return (
        <CardContainer>
            <CardPrice price={product.price} />

            <CardImage product={product} modalType="shop" />

            <CardButtons product={product} cardType="shop" />
        </CardContainer>
    )
}

export default ShopCard