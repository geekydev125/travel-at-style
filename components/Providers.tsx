import { CartContextProvider } from "@/context/cartContext"
import { CartDrawerContextProvider } from "@/context/cartDrawerContext"
import { ModalContextProvider } from "@/context/modalContext"
import { NotificationProvider } from "@/context/notificationContext"

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartContextProvider>
            <CartDrawerContextProvider>
                <NotificationProvider>
                    <ModalContextProvider>
                        {children}
                    </ModalContextProvider>
                </NotificationProvider>
            </CartDrawerContextProvider>
        </CartContextProvider>
    )
}

export default Providers;