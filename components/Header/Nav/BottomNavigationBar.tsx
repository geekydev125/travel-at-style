import uniqid from 'uniqid'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"

import routes from '@/data/routes.json'

import { Route } from '@/components/Header/Nav/TopNavigationBar'

interface Props {
    isBottomNavCollapsed: boolean,
}

function BottomNavigationBar({
    isBottomNavCollapsed,
}:Props) {
    const pathname = usePathname()

    return (

        <Navbar className={`${isBottomNavCollapsed ? 'py-0' : 'py-1'} px-md-5 d-none d-lg-block bg-primary`} style={{transition: 'padding 0.5s ease-out'}} >

            <Container fluid className="px-3 px-lg-5 overflow-hidden" style={{ maxHeight: isBottomNavCollapsed ? '2px' : '32px', transition: 'max-height 0.5s ease-out' }}>
                <Nav className={`me-auto ${isBottomNavCollapsed ? 'opacity-0' : 'opacity-100 '}`} style={{transition: 'opacity 0.5s ease-out'}}>
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 5 && index < 8) {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <Nav.Link
                                        as={NextLink}
                                        className={`py-0 mx-2 text-custom-light ${pathname === route.path ? 'active' : ''}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </Nav.Link>
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
                                    <Nav.Link
                                        as={NextLink}
                                        className={`py-0 mx-2 text-custom-light ${pathname === route.path ? 'active' : ''}`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>
            </Container>
        </Navbar >
    )
}

export default BottomNavigationBar