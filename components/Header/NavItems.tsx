import uniqid from 'uniqid'

import routes from '@/data/routes.json'
import IconShoppingCart from '../Icons/IconShoppingCart'

interface Route {
    path: string
    title: string
}

function NavItems() {
    return (
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index < 5) {
                        return (
                            <li className="nav-item" key={uniqid()}>
                                <a className="nav-link text-white" aria-current="page" href={route.path}>
                                    {route.title}
                                    {route.path === '/shop' && <IconShoppingCart />}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index > 5) {
                        return (
                            <li className="nav-item" key={uniqid()}>
                                <a className="nav-link text-white" aria-current="page" href={route.path}>{route.title}</a>
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default NavItems