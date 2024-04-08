"use client";

import { usePathname } from "next/navigation";

import Nav from "@/components/Header/Nav/Nav";

function Header() {
    const pathname = usePathname();

    return (
        <>
            {
                pathname !== "/" && (
                    <header
                        className={`position-sticky top-0 z-2 px-md-5 shadow`}
                        style={{ backgroundImage: `url('/assets/img/patterns/wood-pattern.jpg')` }}
                    >
                        <Nav />
                    </header>
                )
            }
        </>
    )
}

export default Header