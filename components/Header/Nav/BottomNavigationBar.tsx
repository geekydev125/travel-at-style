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

interface Props {
    isBottomNavCollapsed: boolean,
}

function BottomNavigationBar({
    isBottomNavCollapsed,
}:Props) {
    const pathname = usePathname()

    return (

        <Navbar className={`${isBottomNavCollapsed ? 'py-0' : 'py-1'} px-md-5 d-none d-lg-block bg-primary`} style={{transition: 'padding 0.5s ease-out'}} >

            <div className="container-fluid px-3 px-lg-5 overflow-hidden" style={{ maxHeight: isBottomNavCollapsed ? '2px' : '32px', transition: 'max-height 0.5s ease-out' }}>
                <Nav className={`me-auto ${isBottomNavCollapsed ? 'opacity-0' : 'opacity-100 '}`} style={{transition: 'opacity 0.5s ease-out'}}>
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 5 && index < 8) {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <NextLink
                                        className={`py-0 mx-2 nav-link text-custom-light ${pathname === route.path && 'active'}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </NextLink>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>

                <Nav className={`ms-auto ${isBottomNavCollapsed ? 'opacity-0' : 'opacity-100 '}`} style={{transition: 'opacity 0.5s ease-in-out'}}>
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 7) {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <NextLink
                                        className={`py-0 mx-2 nav-link text-custom-light ${pathname === route.path && 'active'}`}
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