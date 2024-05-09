"use client"
import { usePathname } from "next/navigation";

function LuggageAccessoriesHeaderTitle() {
    const pathname = usePathname();

    return (
        <h3 className="display-2 text-center fw-semibold text-dark text-uppercase">
            {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
        </h3>
    )
}

export default LuggageAccessoriesHeaderTitle