"use client";

import NavigationBar from "@/components/Header/Nav/NavigationBar";

function Header() {

    return (
        <header className='position-fixed w-100 top-0 z-2 px-md-5 shadow background-pattern-wood'>
            <NavigationBar />
        </header>
    )
}

export default Header