
import { useModalContext } from "@/context/modalContext"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import Button from "react-bootstrap/Button"
import AddRemoveCartButtons from "@/components/AddRemoveCartButtons"

interface Props {
    product: Steamer | Luggage | Accessory,
}

function ShopProductCardButtons({
    product,
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
            <Button variant='text' onClick={() => showModalHandler(true, product)} className="fw-bold h5 mb-0 px-md-0 px-lg-2">
                {product.name}
                {(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}
            </Button>
            
            <AddRemoveCartButtons classesRemoveButton="me-1" product={product} />

        </div>
    )
}

export default ShopProductCardButtons