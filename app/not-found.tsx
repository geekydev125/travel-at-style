import NextLink from 'next/link'

import CustomButton from '@/components/CustomButton'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function NotFound() {
    return (
        <Container as="section" className='h-100 w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5'>
            <Row className='g-5'>

                <Col xs={{order: 2}} md={{span: 2, offset: 1, order: 1}} className='d-flex align-items-center justify-content-center'>
                    <img src="/assets/img/logo/logo-transparent.png" alt="Travel @ Style logo" className='img-fluid' style={{maxWidth: '120px'}} />
                </Col>

                <Col xs={{order: 1}} md={{span:9, order: 1}} className='d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='text-danger text-center display-3 fw-semibold'>Oops... 404 Error </h3>
                    <p className='text-center display-6 fw-semibold'>(Page not found)</p>
                    <NextLink href='/' >
                        <CustomButton variant='primary' size='sm' >
                            Click here to go back home
                        </CustomButton>
                    </NextLink>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound