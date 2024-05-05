"use client";
import { useEffect, useState } from "react";

import TopNavigationBar from "@/components/Header/Nav/TopNavigationBar";
import BottomNavigationBar from "./Nav/BottomNavigationBar";

interface Props {
    fontClass: string
}

function Header({
    fontClass
}:Props) {
    const [isBottomNavCollapsed, setIsBottomNavCollapsed] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsBottomNavCollapsed(true)
        }, 800);
    }, [])

    function handleBottomNavCollapse() {
        setIsBottomNavCollapsed(prevState => !prevState)
    }

    return (
        <header className={`${fontClass} position-fixed w-100 top-0 z-3 shadow`}>
            <TopNavigationBar isBottomNavCollapsed={isBottomNavCollapsed} handleBottomNavCollapse={handleBottomNavCollapse} />
            <BottomNavigationBar isBottomNavCollapsed={isBottomNavCollapsed} />
        </header>
    )
}

export default Header