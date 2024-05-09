"use client"
import { usePathname } from "next/navigation";

function LuggageAccessoriesHeaderTitle() {
    const pathname = usePathname();

    return (
        <h3 className="display-2 text-center z-1 fw-semibold text-light text-uppercase">
            {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
        </h3>
    )
}

export default LuggageAccessoriesHeaderTitle