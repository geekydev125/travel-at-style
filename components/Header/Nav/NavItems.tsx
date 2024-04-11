"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid'

import routes from '@/data/routes.json'
import IconShoppingCart from '../../Icons/IconShoppingCart'

interface Route {
    path: string
    title: string
}

function NavItems() {
    const pathname = usePathname()

    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index < 5) {
                        return (
                            <li className="nav-item" key={uniqid()}>
                                <Link
                                    className={`nav-link text-custom-light ${route.path === '/shop' && 'fst-italic fw-medium'} ${pathname === route.path && 'active'}`}
                                    aria-current="page"
                                    href={route.path}
                                >
                                    {route.title}
                                    {route.path === '/shop' && <span className='ms-2'><IconShoppingCart /></span>}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-underline">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index > 4) {
                        return (
                            <li className="nav-item" key={uniqid()}>
                                <Link className={`nav-link text-custom-light ${pathname === route.path && 'active'}`} aria-current="page" href={route.path}>{route.title}</Link>
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default NavItems