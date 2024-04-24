"use client";
import { useEffect } from "react";
import { ToastContainer, toast, Flip } from "react-toastify"

import { TNotificationType, useNotificationContext } from "@/context/notificationContext"

function Notification() {
    const { notification } = useNotificationContext()

    useEffect(() => {
        const { message, type, options } = notification

        if (message) {
            toast[`${(type as TNotificationType)}`](message, options)
        }
    }, [notification])


    return (
        <ToastContainer
            position="bottom-left"
            autoClose={1500}
            limit={3}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="dark"
            transition={Flip}
        />
    )
}

export default Notification