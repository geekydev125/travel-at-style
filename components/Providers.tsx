import { CartContextProvider } from "@/context/cartContext"
import { CartDrawerContextProvider } from "@/context/cartDrawerContext"
import { ModalContextProvider } from "@/context/modalContext"
import { NotificationProvider } from "@/context/notificationContext"
import { ProgressBarProvider } from "react-transition-progress"

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CartContextProvider>
            <CartDrawerContextProvider>
                <NotificationProvider>
                    <ModalContextProvider>
                        <ProgressBarProvider>
                            {children}
                        </ProgressBarProvider>
                    </ModalContextProvider>
                </NotificationProvider>
            </CartDrawerContextProvider>
        </CartContextProvider>
    )
}

export default Providers;