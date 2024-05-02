import NextLink from "next/link"
import uniqid from "uniqid"

import routes from "@/data/routes.json"

import { Route } from '@/components/Header/Nav/TopNavigationBar'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function TopFooter() {
    return (
        <Container as='nav'>
            <Row className="px-4 pt-5">
                <Col xs={6} md={3} className="order-1 d-flex flex-column align-items-md-center">
                    <h4 className="text-custom-light">Products</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index < 4) {
                                return (
                                    <li key={uniqid()}>
                                        <NextLink className="nav-link text-custom-light" href={route.path}>
                                            {route.title}
                                        </NextLink>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Col>

                <Col xs={6} md={3} className="order-2 d-flex flex-column align-items-md-center">
                    <h4 className="text-custom-light">Steamers Misc</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index > 5 && index < 8) {
                                return (
                                    <li key={uniqid()}>
                                        <NextLink className="nav-link text-custom-light" href={route.path}>
                                            {route.title}
                                        </NextLink>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </Col>

                <Col xs={6} md={3} className="order-4 order-md-3 d-flex flex-column align-items-md-center">
                    <NextLink className="nav-link" href='/' style={{ maxWidth: '150px' }}>
                        <img src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" className="img-fluid" />
                    </NextLink>
                </Col>

                <Col xs={6} md={3} className="order-3 order-md-4 d-flex flex-column align-items-md-center">
                    <h4 className="text-custom-light">Get In Touch</h4>
                    <ul className="list-unstyled">
                        {routes.map((route: Route, index) => {
                            if (route.path !== '/' && index > 7) {
                                return (
                                    <li key={uniqid()}>
                                        <NextLink className="nav-link text-custom-light" href={route.path}>
                                            {route.title}
                                        </NextLink>
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