"use client"
import { createContext, useContext, useState } from "react";

import { Accessory } from "@/model/Accessory";
import { Luggage } from "@/model/Luggage";
import { Steamer } from "@/model/Steamer";

interface IModalContext {
    showModal: boolean,
    product: Steamer | Accessory | Luggage | null,
    showModalHandler: (showModal: boolean, product: IModalContext['product']) => void
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    product: null,
    showModalHandler: () => {}
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }:Props) => {
    const [showModal, setShowModal] = useState<IModalContext['showModal']>(false);
	const [product, setProduct] = useState<IModalContext['product']>(null);

	const showModalHandler = (showModal: boolean, product: IModalContext['product']) => {
        if(showModal) {
            if (product) {
                setProduct(product)
                setShowModal(true)
            } else {
                setShowModal(false)
            }
        } else {
            setShowModal(false)
        }
	}

    return (
        <ModalContext.Provider value={{showModal, product, showModalHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}