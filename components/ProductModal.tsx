"use client"

import { useModalContext } from '@/context/modalContext';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductModal() {
    const { showModal, product, showModalHandler } = useModalContext()

    return (
        <>
            <Modal size='lg' show={showModal} onHide={() => showModalHandler(false)}>
                <Modal.Header closeButton className='background-light-gradient text-custom-dark'>
                    <Modal.Title>{product && product.name }</Modal.Title>
                </Modal.Header>

                <Modal.Body className='background-pattern-crossword text-custom-dark'>
                    {product && product.description}
                </Modal.Body>

                <Modal.Footer className='background-light-gradient'>
                    <Button variant="outline-danger" className='btn-sm' onClick={() => showModalHandler(false)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal