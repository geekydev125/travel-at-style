"use client"
import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid'

import styles from './Nav.module.scss'
import routes from '@/data/routes.json'
import { useCartDrawerContext } from '@/context/cartDrawerContext'

import TopNavigationNavItems from '@/components/Header/Nav/TopNavigationNavItems'
import IconBars from '@/components/Icons/IconBars'
import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

interface Route {
    path: string
    title: string
}

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
    const { handleShow } = useCartDrawerContext()

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
                <NextLink onClick={collapseNav} href="/steamers" className='d-lg-none py-0'>
                    <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" style={{maxWidth: '75px'}}/>
                </NextLink>

                <Nav className='d-flex flex-row d-lg-none' >
                    {/* Shop Now item - Mobile*/}
                    {routes.map((route: Route) => {
                        if (route.path == '/shop') {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <NextLink
                                        onClick={collapseNav}
                                        className={`nav-link fw-medium fst-italic text-custom-light mx-2 me-sm-4 ${styles['shop-item']} ${pathname === route.path && 'active'}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </NextLink>
                                </Nav.Item>
                            )
                        }
                    })}

                    {/* Cart - Mobile*/}
                    <Nav.Item>
                        <span onClick={handleShow} className='nav-link mx-2' style={{ cursor: 'pointer' }}>
                            <CartIconWithBadge cartIconHeight='23px' cartIconWidth='23px' />
                        </span>
                    </Nav.Item>
                </Nav>

                <Navbar.Toggle aria-controls="navbarContent" ref={navButtonRef} onClick={() => setExpanded(() => !expanded)}>
                    <IconBars width='30px' height='30px' />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarContent" ref={navbarCollapseRef} className='py-lg-3 position-relative'>
                    <TopNavigationNavItems
                        collapseNav={collapseNav}
                        isBottomNavCollapsed={isBottomNavCollapsed}
                        handleBottomNavCollapse={handleBottomNavCollapse}
                    />
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default TopNavigationBar