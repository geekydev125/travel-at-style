import styles from '@/components/Pages/LuggageAccessories/LuggageAccessories.module.scss'

import ProductModalDynamicLoader from "@/components/Common/ProductModal/ProductModalDynamicLoader";
import LuggageAccessoriesHeaderTitle from "@/components/Pages/LuggageAccessories/LuggageAccessoriesHeaderTitle";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";

interface Props {
    children: React.ReactNode
}

function ProductsLayout({
    children
}: Props) {
    return (
        <>
            <section className={`${styles['luggage-accessories-title-section']} background-gray-radial-gradient position-relative `} >
                <Container className='h-100 d-flex justify-content-center align-items-center  '>
                    <LuggageAccessoriesHeaderTitle />
                </Container>

                <img src="/assets/img/logo/logo-gray.png" alt="logo" className={`z-0 ${styles['logo-img']}`}  />
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