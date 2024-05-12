"use client";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-transition-progress";

import TopNavbar from "@/components/Header/Navbar/TopNavbar";
import BottomNavbar from "@/components/Header/Navbar/BottomNavbar";

interface Props {
    fontClass: string
}

function Header({
    fontClass
}: Props) {
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
            <div className="position-relative background-pattern-wood w-100 top-0 z-5" style={{ height: '5px'}}>
                <ProgressBar className="h-100 bg-primary" />
            </div>
            <TopNavbar isBottomNavCollapsed={isBottomNavCollapsed} handleBottomNavCollapse={handleBottomNavCollapse} />
            <BottomNavbar isBottomNavCollapsed={isBottomNavCollapsed} />
        </header>
    )
}

export default Header