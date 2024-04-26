"use client"
import { useModalContext } from '@/context/modalContext';

import { Steamer } from '@/model/Steamer';
import { Accessory } from '@/model/Accessory';
import { Luggage } from '@/model/Luggage';

import AddRemoveCartButtons from '../AddRemoveCartButtons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function ProductModal() {
    const { showModal, product, showModalHandler } = useModalContext()

    return (
        <>
            <Modal size='lg' centered show={showModal} onHide={() => showModalHandler(false, null)}>
                {/* <Modal.Header closeButton={false} className='background-light-gradient text-custom-dark'>
                    <Modal.Title>
                        {product && product.name}
                        {`${(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}`}
                    </Modal.Title>
                </Modal.Header> */}

                <Modal.Body className='background-pattern-crossword text-custom-dark rounded-3'>
                    <Container>
                        <Row>
                            <Col xs={12} lg={5} className='mb-3 mb-lg-0 d-flex flex-column justify-content-between '>
                                <div>
                                    <h4 className='text-custom-dark display-4 fw-semibold'>
                                        {product && product.name}
                                        {`${(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}`}
                                    </h4>

                                    <p className='text-custom-dark mt-4'>
                                        {product && product.description}
                                    </p>
                                </div>

                                <p className='d-none d-lg-flex text-custom-dark display-5 fw-semibold mb-0'>
                                    Price: {product && product.price}
                                </p>

                                <div className='d-none d-lg-flex flex-row justify-content-end align-items-center'>
                                    <AddRemoveCartButtons classesRemoveButton='me-1' product={(product as Luggage | Accessory | Steamer)} />
                                </div>
                            </Col>
                            <Col xs={12} lg={7} className='overflow-hidden '>
                                {
                                    product && (
                                        <img
                                            className='img-fluid'
                                            src={`/assets/img/${product.imgFolder}/${product.img}`}
                                            alt={`${product && product.name} (${(product as Steamer).color})`}
                                        />
                                    )
                                }

                                <div className='d-flex d-lg-none flex-row flex-sm-row justify-content-between align-items-center mt-4'>
                                    <p className='text-custom-dark display-5 fw-semibold mb-0'>
                                        Price: {product && product.price}
                                    </p>

                                    <AddRemoveCartButtons classesRemoveButton='me-1' product={(product as Luggage | Accessory | Steamer)} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer className='background-light-gradient'>
                    <Button variant="outline-primary" className='btn-sm' onClick={() => showModalHandler(false, null)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal