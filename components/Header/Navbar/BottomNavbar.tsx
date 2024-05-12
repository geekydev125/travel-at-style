import { startTransition } from 'react'
import { useProgress } from 'react-transition-progress'
import { Link as NextTransitionProgressLink } from "react-transition-progress/next"
import uniqid from 'uniqid'

import { usePathname } from 'next/navigation'

import routes from '@/data/routes.json'

import { Route } from '@/components/Header/Navbar/TopNavbar'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"



interface Props {
    isBottomNavCollapsed: boolean,
}

function BottomNavbar({
    isBottomNavCollapsed,
}:Props) {
    const pathname = usePathname()
    const startProgress = useProgress()
    
    return (

        <Navbar className={`${isBottomNavCollapsed ? 'py-0' : 'py-1'} px-md-5 d-none d-lg-block bg-primary`} style={{transition: 'padding 0.5s ease-out'}} >

            <Container fluid className="px-3 px-lg-5 overflow-hidden" style={{ maxHeight: isBottomNavCollapsed ? '4px' : '32px', transition: 'max-height 0.5s ease-out' }}>
                <Nav className={`me-auto ${isBottomNavCollapsed ? 'opacity-0' : 'opacity-100 '}`} style={{transition: 'opacity 0.5s ease-out'}}activeKey={pathname} >
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 5 && index < 8) {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <Nav.Link
                                        as={NextTransitionProgressLink}
                                        onClick={() => startTransition(startProgress)}
                                        className={`py-0 mx-2 text-light`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        }
                    })}
                </Nav>

                <Nav className={`ms-auto ${isBottomNavCollapsed ? 'opacity-0' : 'opacity-100 '}`} style={{transition: 'opacity 0.5s ease-in-out'}} activeKey={pathname}>
                    {routes.map((route: Route, index) => {
                        if (route.path !== '/' && index > 7) {
                            return (
                                <Nav.Item key={uniqid()}>
                                    <Nav.Link
                                        as={NextTransitionProgressLink}
                                        onClick={() => startTransition(startProgress)}
                                        className={`py-0 mx-2 text-light`}
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

export default BottomNavbar