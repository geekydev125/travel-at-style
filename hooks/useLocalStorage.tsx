import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

export default function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState(() => initialValue);

    const initialize = () => {
        if (isServer) {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);

            return item
                ? JSON.parse(item)
                : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    };

    /* prevents hydration error so that state is only initialized after server is defined */
    useEffect(() => {
        if (!isServer) {
            setStoredValue(initialize());
        }
    }, []);

    const setValue = (value: {}) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function
                    ? value(storedValue)
                    : value;

            setStoredValue(valueToStore);

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {

            console.log(error);
        }
    };
    return [storedValue, setValue];
}