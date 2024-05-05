"use client"
import dynamic from 'next/dynamic'

import { useNotificationContext } from '@/context/notificationContext'

const Notification = dynamic(() => import('@/components/Common/Notification/Notification'), {
    loading: () => null,
    ssr: false
})

function NotificationDynamicLoader() {
    const { notification } = useNotificationContext()
    
    return (
        <>
            {notification.message && <Notification />}

        </>
    )
}

export default NotificationDynamicLoader