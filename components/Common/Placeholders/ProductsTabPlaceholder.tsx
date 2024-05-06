import uniqid from 'uniqid'

import ShopProductCardPlaceholder from './ShopProductCardPlaceholder'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'

function ProductsTabPlaceholder() {
    return (
        <>
            <Placeholder as='p' className='ms-2 mb-3' animation='glow'>
                <Placeholder xs={6} md={4} size='sm'/>
            </Placeholder>

            <Container>
                <Row className='gx-3 gx-lg-4 gy-4'>
                    {
                        [...Array(6)].map(el => {
                            return (
                                <Col xs={12} sm={6} lg={4} key={uniqid()}>
                                    <ShopProductCardPlaceholder />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default ProductsTabPlaceholder