import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

interface Props {
    children: React.ReactNode
}

function ProductsTab({
    children
}: Props) {
    return (
        <>
            <p>
                <small className='text-muted'>*Click on product's image/name for more info</small>
            </p>
            <Container>
                <Row className='gx-3 gx-lg-4 gy-4'>
                    {children}
                </Row>
            </Container>
        </>
    )
}

export default ProductsTab