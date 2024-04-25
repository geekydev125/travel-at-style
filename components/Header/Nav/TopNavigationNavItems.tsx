"use client"
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid'

import { useCartDrawerContext } from '@/context/cartDrawerContext'

import styles from './Nav.module.scss'

import routes from '@/data/routes.json'

import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'

import Nav from 'react-bootstrap/Nav'

interface Route {
    path: string
    title: string
}

interface Props {
    collapseNav: () => void
}

function TopNavigationNavItems({
    collapseNav
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
                                className={`nav-link text-custom-light ${route.path === '/shop' && 'fst-italic fw-medium'} ${pathname === route.path && 'active'}`}
                                href={route.path}
                            >
                                {route.title}
                            </NextLink>
                        )
                    }
                })}


            </Nav>

            <NextLink
                onClick={collapseNav}
                href="/steamers" className='d-none d-lg-block position-absolute'
                style={{ left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)'}}
            >
                <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
            </NextLink>

            <Nav className="ms-auto">
                {routes.map((route: Route, index) => {
                    if (route.path == '/shop') {
                        return (
                            <NextLink
                                key={uniqid()}
                                onClick={collapseNav}
                                className={`nav-link text-custom-light fst-italic fw-medium ${pathname === route.path && 'active'}`}
                                href={route.path}
                            >
                                {route.title}
                            </NextLink>
                        )
                    }
                })}
                {
                    routes.find((route: Route) => route.path === '/shopping-cart') && (
                        <span onClick={handleShow} className='nav-link' style={{ cursor: 'pointer' }}>
                            <CartIconWithBadge />
                        </span>
                    )
                }
            </Nav>
        </>
    )
}

export default TopNavigationNavItems