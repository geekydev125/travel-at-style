import styles from '@/components/Pages/LuggageAccessories/LuggageAccessories.module.scss'

import ProductModalDynamicLoader from "@/components/Common/ProductModal/ProductModalDynamicLoader";
import LuggageAccessoriesHeaderTitle from "@/components/Pages/LuggageAccessories/LuggageAccessoriesHeaderTitle";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import GoToShopButton from '@/components/Common/Buttons/GoToShopButton';

interface Props {
    children: React.ReactNode
}

function ProductsLayout({
    children
}: Props) {
    return (
        <>
            <section className={`${styles['luggage-accessories-title-section']} background-blue-radial-gradient`} >
                <Container className='h-100 d-flex flex-column justify-content-center align-items-center z-1 '>
                    <LuggageAccessoriesHeaderTitle />

                    <GoToShopButton>
                        Explore all products
                    </GoToShopButton>
                </Container>

            </section>

            <Container as='section' className="py-5">
                <Row className="gx-2 gx-md-3 gy-4 d-flex flex-row align-items-stretch flex-wrap">
                    {children}
                </Row>
            </Container>

            <ProductModalDynamicLoader />
        </>
    )
}

export default ProductsLayout