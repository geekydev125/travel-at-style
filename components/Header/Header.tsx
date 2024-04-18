"use client";

import Nav from "@/components/Header/Nav/Nav";

function Header() {

    return (
        <header className='position-sticky top-0 z-2 px-md-5 shadow background-pattern-wood'>
            <Nav />
        </header>
    )
}

export default Header