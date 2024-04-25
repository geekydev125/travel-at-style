"use client";

import TopNavigationBar from "@/components/Header/Nav/TopNavigationBar";
import BottomNavigationBar from "./Nav/BottomNavigationBar";

function Header() {

    return (
        <header className='position-fixed w-100 top-0 z-2 shadow'>
            <TopNavigationBar />
            <BottomNavigationBar />
        </header>
    )
}

export default Header