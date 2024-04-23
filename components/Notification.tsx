"use client";
import { TNotificationType, useNotificationContext } from "@/context/notificationContext"
import { ToastContainer, toast } from "react-toastify"

function Notification() {
    const { notification } = useNotificationContext()

    if(notification) {
        const { message, type, options } = notification

        toast[`${(type as TNotificationType)}`](message)
    }

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    )
}

export default Notification