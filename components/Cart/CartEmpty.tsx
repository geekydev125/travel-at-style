import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    handleDrawerClose: () => void
}

function CartEmpty({
    handleDrawerClose
}:Props) {
    const pathname = usePathname()

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <h5 className="text-custom-dark">Cart is empty</h5>
            <p className="text-custom-dark">
                Please head out to the&nbsp;
                <NextLink href='/shop' onClick={ pathname === '/shop' ? handleDrawerClose : undefined } >shop</NextLink>
                &nbsp;to fill up the cart with your travel gear.</p>
        </div>
    )
}

export default CartEmpty