"use client"

import { useModalContext } from '@/context/modalContext';

import { Steamer } from '@/model/Steamer';
import { Accessory } from '@/model/Accessory';
import { Luggage } from '@/model/Luggage';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddRemoveCartButtons from '../AddRemoveCartButtons';

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
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-5 mb-3 mb-lg-0 d-flex flex-column justify-content-between '>
                                <div>
                                    <h4 className='text-custom-dark display-4 fw-semibold'>
                                        {product && product.name}
                                        {`${(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}`}
                                    </h4>

                                    <p className='text-custom-dark mt-4'>
                                        {product && product.description}
                                    </p>
                                </div>

                                <div className='d-none d-lg-flex flex-row justify-content-between align-items-center'>
                                    <p className='text-custom-dark display-5 fw-semibold mb-0'>
                                        Price: {product && product.price}
                                    </p>

                                    <AddRemoveCartButtons product={(product as Luggage | Accessory | Steamer)} />
                                </div>

                            </div>
                            <div className='col-12 col-lg-7 overflow-hidden '>
                                {
                                    product && (
                                        <img
                                            className='img-fluid'
                                            src={`/assets/img/${product.imgFolder}/${product.img}`}
                                            alt={`${product && product.name} (${(product as Steamer).color})`}
                                        />
                                    )
                                }

                                <div className='d-flex d-lg-none flex-column flex-sm-row justify-content-between align-items-center mt-4'>
                                    <p className='text-custom-dark display-5 fw-semibold mb-0'>
                                        Price: {product && product.price}
                                    </p>

                                    <AddRemoveCartButtons product={(product as Luggage | Accessory | Steamer)} />
                                </div>
                            </div>
                        </div>
                    </div>
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