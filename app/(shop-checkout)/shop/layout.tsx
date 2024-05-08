import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Shop",
}

interface Props {
    children: React.ReactNode
}

function ShopLayout({
    children
}: Props) {
    return (
        <>
            {children}
        </>
    )
}

export default ShopLayout