import { useCartContext } from '@/context/cartContext';

import IconShoppingCart from '@/components/Icons/IconShoppingCart';
import Badge from 'react-bootstrap/Badge';

interface Props {
    iconContainerClasses?: string
    cartIconWidth?: string
    cartIconHeight?: string
    cartIconFill?: string
    cartIconClasses?: string
}

function CartIconWithBadge({
    iconContainerClasses,
    cartIconWidth,
    cartIconHeight,
    cartIconFill,
    cartIconClasses
}: Props) {
    const { getCartTotalProducts } = useCartContext()
    
    return (
        <span  className={`position-relative ${iconContainerClasses}`}>
            <IconShoppingCart
                width={cartIconWidth}
                height={cartIconHeight}
                fill={cartIconFill}
                classes={cartIconClasses}
            />

            {
                getCartTotalProducts() > 0 && (
                    <Badge pill bg="primary" className='position-absolute' style={{top: '-11px', right: '-14px' }} >
                        {getCartTotalProducts()}
                    </Badge>
                )
            }
        </span>

    )
}

export default CartIconWithBadge