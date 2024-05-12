"use client"
import { useCartDrawerContext } from '@/context/cartDrawerContext'

import CustomButton from '@/components/Common/Buttons/CustomButton'
import IconShoppingCart from '@/components/Icons/IconShoppingCart'

import ProceedToCheckoutButton from '@/components/Common/Buttons/ProceedToCheckoutButton'

function ShowCartCheckoutButtons() {
    const { handleShow } = useCartDrawerContext()
    
    return (
        <div className='ms-auto'>
            <CustomButton variant='primary' size='sm' classesButton='me-2' onClick={handleShow}>
                Show Cart&nbsp;
                <IconShoppingCart />
            </CustomButton>

            <ProceedToCheckoutButton />
        </div>
    )
}

export default ShowCartCheckoutButtons