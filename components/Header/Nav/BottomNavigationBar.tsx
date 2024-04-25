import uniqid from 'uniqid'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import routes from '@/data/routes.json'

interface Route {
    path: string
    title: string
}

function BottomNavigationBar() {
    const pathname = usePathname()

    return (
        <Navbar className='px-md-5 py-0 bg-beige d-none d-lg-block' >
            <div className="container-fluid px-3 px-lg-5">
                <Nav className="me-auto">
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 5 && index < 8) {
                            return (
                                <Nav.Item>
                                    <NextLink
                                        key={uniqid()}
                                        className={`py-0 nav-link text-custom-light ${pathname === route.path && 'active'}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </NextLink>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>

                <Nav className="ms-auto">
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 7 ) {
                            return (
                                <Nav.Item>
                                    <NextLink
                                        key={uniqid()}
                                        className={`py-0 nav-link text-custom-light ${pathname === route.path && 'active'}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </NextLink>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>
            </div>
        </Navbar >
    )
}

export default BottomNavigationBar