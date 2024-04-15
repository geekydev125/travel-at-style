"use client"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Accessory } from '@/model/Accessory';
import { Luggage } from '@/model/Luggage';
import { Steamer } from '@/model/Steamer';

interface Props {
    product: Steamer | Accessory | Luggage,
    showModal: boolean,
    showModalHandler: (showBool: boolean, product?: Steamer | Accessory | Luggage) => void

}

function ProductModal({
    product,
    showModal,
    showModalHandler
}:Props) {
    return (
        <>
            <Modal show={showModal} onHide={() => showModalHandler(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{product.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => showModalHandler(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => showModalHandler(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal