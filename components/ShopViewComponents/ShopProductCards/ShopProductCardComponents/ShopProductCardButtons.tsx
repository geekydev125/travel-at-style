
import { useModalContext } from "@/context/modalContext"
import { Accessory, AccessoryVariant } from "@/model/Accessory"
import { Luggage, LuggageVariant } from "@/model/Luggage"
import { Steamer, SteamerVariant } from "@/model/Steamer"
import Button from "react-bootstrap/Button"

interface Props {
    product: Steamer | Luggage | Accessory,
    variant: SteamerVariant | LuggageVariant | AccessoryVariant,
}

function ShopProductCardButtons({
    product,
    variant,
}: Props) {
    const { showModalHandler } = useModalContext()
    return (
        <div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
            <Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0">
                {product.name} {`(${(variant as SteamerVariant).color})`}
            </Button>
            <Button variant='button' className="btn btn-success btn-sm me-2">Add to cart</Button>
        </div>
    )
}

export default ShopProductCardButtons