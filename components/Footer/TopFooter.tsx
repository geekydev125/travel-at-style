import Link from "next/link"
import uniqid from "uniqid"

import routes from "@/data/routes.json"

import styles from './Footer.module.scss'

import { Route } from '@/components/Header/Navbar/TopNavbar'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function TopFooter() {

    return (
        <Container as='nav'>
            <Row className="px-3 pt-5">
                <Col xs={6} md={3} className="order-1 d-flex flex-column align-items-md-center">
                    <h4 className="text-primary fw-semibold">Products</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index < 4) {
                                return (
                                    <li key={uniqid()}>
                                        <Link
                                            className="nav-link text-light"
                                            href={route.path}
                                        >
                                            {route.title}
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Col>

                <Col xs={6} md={3} className="order-2 d-flex flex-column align-items-md-center">
                    <h4 className="text-primary fw-semibold">Steamers Misc</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index > 5 && index < 8) {
                                return (
                                    <li key={uniqid()}>
                                        <Link
                                            className="nav-link text-light"
                                            href={route.path}
                                        >
                                            {route.path === '/instructions'
                                                ? 'Instructions'
                                                : route.path === '/warranty'
                                                    ? 'Warranty'
                                                    : route.title
                                            }
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Col>

                <Col xs={6} md={3} className="order-4 order-md-3 d-flex flex-column align-items-md-center">
                    <Link className={`nav-link ${styles['logo']}`} href='/' >
                        <img src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" className="img-fluid" />
                    </Link>
                </Col>

                <Col xs={6} md={3} className="order-3 order-md-4 d-flex flex-column align-items-md-center">
                    <h4 className="text-primary fw-semibold">Get In Touch</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index > 7) {
                                return (
                                    <li key={uniqid()}>
                                        <Link
                                            className="nav-link text-light"
                                            href={route.path}
                                        >
                                            {route.title}
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default TopFooter