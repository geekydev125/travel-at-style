import Badge from 'react-bootstrap/Badge';

import IconShoppingCart from '@/components/Icons/IconShoppingCart';
import { useCartContext } from '@/context/cartContext';
import { useCartDrawerContext } from '@/context/cartDrawerContext';


function CartIconWithBadge() {
    const { getCarTotalProducts } = useCartContext()
    const { handleShow } = useCartDrawerContext()

    return (
        <div onClick={handleShow} style={{cursor: 'pointer'}} className='ms-2 nav-link position-relative'>
            <IconShoppingCart />

            {
                getCarTotalProducts() > 0 && (
                    <Badge pill bg="primary" className='position-absolute top-0 end-0'>{getCarTotalProducts()}</Badge>
                )
            }
        </div>

    )
}

export default CartIconWithBadge