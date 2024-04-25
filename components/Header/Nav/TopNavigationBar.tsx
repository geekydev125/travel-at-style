"use client"
import Navbar from 'react-bootstrap/Navbar'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from './Nav.module.scss'

import TopNavigationNavItems from './TopNavigationNavItems'
import IconBars from '@/components/Icons/IconBars'
import IconChevronUp from '@/components/Icons/IconChevronUp'

interface Props {
    isBottomNavCollapsed: boolean,
    handleBottomNavCollapse: () => void
}

function TopNavigationBar({
    isBottomNavCollapsed,
    handleBottomNavCollapse
}: Props) {
    const pathname = usePathname()
    const [numRender, setNumRender] = useState<number>(0)
    const [expanded, setExpanded] = useState<boolean>(false)
    const navButtonRef = useRef<HTMLButtonElement | null>(null);
    const navbarCollapseRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (numRender < 1) {
            setNumRender(numRender + 1);
            setExpanded(false)
        } else {
            setExpanded(false)
            collapseNav()
        }
    }, [pathname])

    function collapseNav() {
        if (navButtonRef.current !== null) {
            navButtonRef.current.click();
        }

        if (navbarCollapseRef.current !== null) {
            navbarCollapseRef.current.click();
        }

        setExpanded(false)
    }


    return (
        <Navbar expand="lg" expanded={expanded} className='background-pattern-wood px-md-5' >
            <div className="container-fluid px-3 px-lg-5">
                <NextLink onClick={collapseNav} href="/steamers" className='d-lg-none py-1'>
                    <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
                </NextLink>

                <Navbar.Toggle aria-controls="navbarContent" ref={navButtonRef} onClick={() => setExpanded(() => !expanded)}>
                    <IconBars width='30px' height='30px' />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarContent" ref={navbarCollapseRef} className='py-lg-3 position-relative'>
                    <TopNavigationNavItems collapseNav={collapseNav} />
                </Navbar.Collapse>

                <span onClick={() => handleBottomNavCollapse()} className={`nav-link ms-5 ${styles['chevron-icon-span']}`}>
                    Misc
                    <IconChevronUp classes={`ms-1 ${styles['chevron-icon']} ${isBottomNavCollapsed ? `${styles['rotated-icon']}` : ''}`} />
                </span>
            </div>
        </Navbar >
    )
}

export default TopNavigationBar