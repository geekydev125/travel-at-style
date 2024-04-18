"use client"
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid'

import routes from '@/data/routes.json'
import IconShoppingCart from '../../Icons/IconShoppingCart'
import Nav from 'react-bootstrap/Nav'

interface Route {
    path: string
    title: string
}

function NavItems() {
    const pathname = usePathname()

    return (
        <>
            <Nav className="me-auto">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index < 5) {
                        return (
                            <NextLink
                                key={uniqid()}
                                className={`nav-link text-custom-light ${route.path === '/shop' && 'fst-italic fw-medium'} ${pathname === route.path && 'active'}`}
                                href={route.path}
                            >
                                {route.title}
                                {route.path === '/shop' && <span className='ms-2'><IconShoppingCart /></span>}
                            </NextLink>
                        )
                    }
                })}
            </Nav>
            
            <Nav className="ms-auto">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index > 4) {
                        return (
                            <NextLink
                                key={uniqid()}
                                className={`nav-link text-custom-light ${pathname === route.path && 'active'}`}
                                href={route.path}>
                                {route.title}
                            </NextLink>
                        )
                    }
                })}
            </Nav>
        </>
    )
}

export default NavItems