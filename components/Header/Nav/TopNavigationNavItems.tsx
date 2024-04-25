"use client"
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid'

import { useCartDrawerContext } from '@/context/cartDrawerContext'

import styles from './Nav.module.scss'

import routes from '@/data/routes.json'

import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'

import Nav from 'react-bootstrap/Nav'
import IconChevronUp from '@/components/Icons/IconChevronUp'

interface Route {
    path: string
    title: string
}

interface Props {
    collapseNav: () => void
    isBottomNavCollapsed: boolean,
    handleBottomNavCollapse: () => void
}
interface Props {
    isBottomNavCollapsed: boolean,
    handleBottomNavCollapse: () => void
}
function TopNavigationNavItems({
    collapseNav,
    isBottomNavCollapsed,
    handleBottomNavCollapse
}: Props) {
    const pathname = usePathname()
    const { handleShow } = useCartDrawerContext()


    return (
        <>
            <Nav className="me-auto">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index < 4) {
                        return (
                            <NextLink
                                key={uniqid()}
                                onClick={collapseNav}
                                className={`nav-link mx-3 text-custom-light ${route.path === '/shop' && 'fst-italic fw-medium'} ${pathname === route.path && 'active'}`}
                                href={route.path}
                            >
                                {route.title}
                            </NextLink>
                        )
                    }
                })}
            </Nav>

            {/* Logo */}
            <NextLink
                onClick={collapseNav}
                href="/steamers" className='d-none d-lg-block position-absolute'
                style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)' }}
            >
                <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
            </NextLink>

            <Nav className="ms-auto">
                {/* Misc menu item */}
                <span onClick={() => handleBottomNavCollapse()} className={`nav-link text-custom-light mx-3 ${styles['chevron-icon-span']}`}>
                    Misc
                    <IconChevronUp classes={`ms-1 ${styles['chevron-icon']} ${isBottomNavCollapsed ? `${styles['rotated-icon']}` : ''}`} />
                </span>
                
                {routes.map((route: Route, index) => {
                    if (route.path == '/shop') {
                        return (
                            <NextLink
                                key={uniqid()}
                                onClick={collapseNav}
                                className={`nav-link text-custom-light fst-italic fw-medium mx-3 ${pathname === route.path && 'active'}`}
                                href={route.path}
                            >
                                {route.title}
                            </NextLink>
                        )
                    }
                })}

                {/* Cart */}
                {
                    routes.find((route: Route) => route.path === '/shopping-cart') && (
                        <span onClick={handleShow} className='nav-link mx-3' style={{ cursor: 'pointer' }}>
                            <CartIconWithBadge />
                        </span>
                    )
                }
            </Nav>
        </>
    )
}

export default TopNavigationNavItems