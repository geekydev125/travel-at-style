"use client";
import { createContext, useContext, useState } from 'react';

export type TNotificationType = 'success' | 'error' | 'info' | 'warning';

interface INotification {
    message: string,
    type: TNotificationType,
    options?: any
}

interface INotificationContext {
    notification: INotification | null;
    displayNotification: (message: string, type: TNotificationType, options?: any) => void;
}

export const NotificationContext = createContext<INotificationContext>({
    notification: null,
    displayNotification: () => { }
});

interface Props {
    children: React.ReactNode;
}

export const NotificationProvider = ({
    children
}: Props) => {
    const [notification, setNotification] = useState<INotification | null>(null);


    function displayNotification(message: string, type: TNotificationType, options?: any) {
        setNotification({ message, type, options: options });
    }

    return (
        <NotificationContext.Provider value={{ notification, displayNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    return useContext(NotificationContext);
}