"use client"
import { createContext, useContext, useState } from "react";

import { Accessory, AccessoryVariant } from "@/model/Accessory";
import { Luggage, LuggageVariant } from "@/model/Luggage";
import { Steamer, SteamerVariant } from "@/model/Steamer";

interface IModalContext {
    showModal: boolean,
    product: Steamer | Accessory | Luggage | null,
    variant: SteamerVariant | AccessoryVariant | LuggageVariant | null,
    showModalHandler: (showModal: boolean, product: IModalContext['product'], variant: IModalContext['variant']) => void
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    product: null,
    variant: null,
    showModalHandler: () => {}
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }:Props) => {
    const [showModal, setShowModal] = useState<IModalContext['showModal']>(false);
	const [product, setProduct] = useState<IModalContext['product']>(null);
    const [variant, setVariant] = useState<IModalContext['variant']>(null);

	const showModalHandler = (showModal: boolean, product: IModalContext['product'], variant: IModalContext['variant']) => {
        if(showModal) {
            if (product && variant) {
                setProduct(product)
                setVariant(variant)
                setShowModal(true)
            } else {
                setShowModal(false)
            }
        } else {
            setShowModal(false)
        }
	}

    return (
        <ModalContext.Provider value={{showModal, product, variant, showModalHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}