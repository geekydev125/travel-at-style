import NextTransitionProgressLink from "../Common/NextTransitionProgressLink";

interface Props {
    handleDrawerClose: () => void
}

function CartEmpty({
    handleDrawerClose
}:Props) {
    return (
        <div className="d-flex flex-column justify-content-center h-100 px-3">
            <h5>Cart is empty</h5>
            <p>
                Please head out to the&nbsp;
                <NextTransitionProgressLink href='/shop' onClickHandler={ handleDrawerClose } >shop</NextTransitionProgressLink>
                &nbsp;to fill up the cart with your travel gear.</p>
        </div>
    )
}

export default CartEmpty