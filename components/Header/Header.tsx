"use client";
import { useEffect, useState } from "react";

import TopNavigationBar from "@/components/Header/Nav/TopNavigationBar";
import BottomNavigationBar from "./Nav/BottomNavigationBar";

function Header() {
    const [isBottomNavCollapsed, setIsBottomNavCollapsed] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsBottomNavCollapsed(true)
        }, 2000);
    }, [])

    function handleBottomNavCollapse() {
        setIsBottomNavCollapsed(prevState => !prevState)

    }

    return (
        <header className='position-fixed w-100 top-0 z-2 shadow'>
            <button onClick={handleBottomNavCollapse}>Toggle Bottom Nav</button>
            <TopNavigationBar />
            <BottomNavigationBar isBottomNavCollapsed={isBottomNavCollapsed} />
        </header>
    )
}

export default Header