
import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"
import { Steamer } from "@/model/Steamer"
import Button from "react-bootstrap/Button"

interface Props {
    product: Steamer | Luggage | Accessory
    showModalHandler: (showBool: boolean, product?: Steamer | Luggage | Accessory) => void
}

function ShopProductCardButtons({
    product,
    showModalHandler
}:Props) {
    return (
        <div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
            <Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0">{product.name}</Button>
            <Button variant='button' className="btn btn-success btn-sm me-2">Add to cart</Button>
        </div>
    )
}

export default ShopProductCardButtons