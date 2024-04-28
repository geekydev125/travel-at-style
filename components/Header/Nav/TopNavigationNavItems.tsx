"use client"
import { Fragment } from 'react'
import NextLink from 'next/link'
import uniqid from 'uniqid'

import { useCartDrawerContext } from '@/context/cartDrawerContext'

import styles from './Nav.module.scss'

import routes from '@/data/routes.json'

import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'

import Nav from 'react-bootstrap/Nav'
import IconChevronUp from '@/components/Icons/IconChevronUp'

import { Route } from '@/components/Header/Nav/TopNavigationBar'
import { usePathname } from 'next/navigation'

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
            <Nav className="me-auto" activeKey={pathname}>
                {routes.map((route: Route, index) => {
                    if (route.path !== '/' && index < 4) {
                        return (
                            <Nav.Item key={uniqid()}>
                                <Nav.Link 
                                    as={NextLink}
                                    onClick={collapseNav}
                                    className={`mx-3 text-custom-light ${route.path === '/shop' ? 'fst-italic fw-medium' : ''}`}
                                    href={route.path}
                                >
                                    {route.title}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    }

                    // Additional links on mobile
                    if (route.path !== '/' && index > 5) {
                        return (
                            <Fragment key={uniqid()}>
                                <Nav.Item className={`d-inline-block d-lg-none ${index === 6 ? 'mt-3' : ''}`}>
                                    <Nav.Link 
                                        as={NextLink}
                                        onClick={collapseNav}
                                        className={`mx-3 text-custom-light`}
                                        href={route.path}
                                    >
                                        {route.title}
                                    </Nav.Link>
                                </Nav.Item>
                            </Fragment>
                        )
                    }
                })}
            </Nav>

            {/* Logo */}
            <NextLink
                onClick={collapseNav}
                href="/steamers"
                className='d-none d-lg-block'
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)' }}
            >
                <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
            </NextLink>

            <Nav className="ms-auto" activeKey={pathname}>
                {/* Misc menu item */}
                <Nav.Item className='d-none d-lg-block'>
                    <Nav.Link as={'span'} onClick={() => handleBottomNavCollapse()} className={`text-custom-light mx-3 ${styles['chevron-icon-span']}`}>
                        Misc
                        <IconChevronUp classes={`ms-1 ${styles['chevron-icon']} ${isBottomNavCollapsed ? `${styles['rotated-icon']}` : ''}`} />
                    </Nav.Link>
                </Nav.Item>

                {/* Shop Now item - Desktop*/}
                {routes.map((route: Route) => {
                    if (route.path == '/shop') {
                        return (
                            <Nav.Item key={uniqid()} className='d-none d-lg-block'>
                                <Nav.Link
                                    as={NextLink}
                                    onClick={collapseNav}
                                    className={`fst-italic fw-medium mx-3 text-custom-light ${styles['shop-item']}`}
                                    href={route.path}
                                >
                                    {route.title}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    }
                })}

                {/* Cart - Desktop*/}
                <Nav.Item className='d-none d-lg-block'>
                    <Nav.Link as={'span'} onClick={handleShow} className='mx-3' style={{ cursor: 'pointer' }}>
                        <CartIconWithBadge cartIconHeight='23px' cartIconWidth='23px' />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default TopNavigationNavItems