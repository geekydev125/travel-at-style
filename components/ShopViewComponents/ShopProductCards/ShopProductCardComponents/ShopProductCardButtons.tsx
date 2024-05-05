
import { useModalContext } from "@/context/modalContext"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

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

            <span onClick={() => showModalHandler(true, product)} className="fw-bold h5 mb-0 px-md-0 px-lg-2 display-6">
                {product.name}
                {(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}
            </span>
            
            <AddRemoveCartButtons classesAddButton="mt-sm-2 mt-xl-0" classesRemoveButton="me-1" product={product} />
        </div>
    )
}

export default ShopProductCardButtons