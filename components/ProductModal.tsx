"use client"

import { useModalContext } from '@/context/modalContext';
import { SteamerVariant } from '@/model/Steamer';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductModal() {
    const { showModal, product, variant, showModalHandler } = useModalContext()

    return (
        <>
            <Modal size='xl' centered show={showModal} onHide={() => showModalHandler(false, null, null)}>
                <Modal.Header closeButton={false} className='background-light-gradient text-custom-dark'>
                    <Modal.Title>{product && product.name} {`(${(variant as SteamerVariant).color})`} </Modal.Title>
                </Modal.Header>

                <Modal.Body className='background-pattern-crossword text-custom-dark'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-3 mb-3 mb-lg-0'>
                                <p className='text-custom-dark'>
                                    {product && product.description}
                                </p>
                                <p className='text-custom-dark h4'>
                                   Price: ${(variant as SteamerVariant).price}
                                </p>
                                <Button variant='button' className="btn btn-success me-2">Add to cart</Button>
                            </div>
                            <div className='col-12 col-lg-9 overflow-hidden d-flex flex-row align-items-center justify-content-end'>
                                {
                                    (product && variant) && (
                                        <img
                                            className='img-fluid'
                                            src={`/assets/img/${product.imgFolder}/${variant.img}`}
                                            alt={`${product && product.name} (${(variant as SteamerVariant).color})`}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>


                </Modal.Body>

                <Modal.Footer className='background-light-gradient'>
                    <Button variant="outline-primary" className='btn-sm' onClick={() => showModalHandler(false, null, null)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal