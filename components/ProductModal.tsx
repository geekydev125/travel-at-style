"use client"

import { useModalContext } from '@/context/modalContext';
import { Steamer } from '@/model/Steamer';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductModal() {
    const { showModal, product, showModalHandler } = useModalContext()

    return (
        <>
            <Modal size='xl' centered show={showModal} onHide={() => showModalHandler(false, null)}>
                <Modal.Header closeButton={false} className='background-light-gradient text-custom-dark'>
                    <Modal.Title>{product && product.name} {`(${(product as Steamer).color})`} </Modal.Title>
                </Modal.Header>

                <Modal.Body className='background-pattern-crossword text-custom-dark'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-3 mb-3 mb-lg-0'>
                                <p className='text-custom-dark'>
                                    {product && product.description}
                                </p>
                                <p className='text-custom-dark h4'>
                                   Price: {product && product.price}
                                </p>
                                <Button variant='button' className="btn btn-success me-2">Add to cart</Button>
                            </div>
                            <div className='col-12 col-lg-9 overflow-hidden d-flex flex-row align-items-center justify-content-end'>
                                {
                                    product && (
                                        <img
                                            className='img-fluid'
                                            src={`/assets/img/${product.imgFolder}/${product.img}`}
                                            alt={`${product && product.name} (${(product as Steamer).color})`}
                                        />
                                    )
                                }
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