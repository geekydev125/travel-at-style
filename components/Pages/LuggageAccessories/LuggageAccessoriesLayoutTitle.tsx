"use client"
import { usePathname } from "next/navigation";

function LuggageAccessoriesLayoutTitle() {
    const pathname = usePathname();

    return (
        <h3 className="display-2 text-center mb-0 fw-semibold">
            {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
        </h3>
    )
}

export default LuggageAccessoriesLayoutTitle