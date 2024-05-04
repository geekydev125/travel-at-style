"use client"
import { usePathname } from "next/navigation";

function LayoutTitle() {
    const pathname = usePathname();

    return (
        <h3 className="display-2 text-center text-custom-dark mb-0 fw-semibold">
            {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
        </h3>
    )
}

export default LayoutTitle