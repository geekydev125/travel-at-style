"use client"

import CustomButton from "@/components/Common/Buttons/CustomButton";
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink";
import IconChevronLeft from "@/components/Icons/IconChevronLeft";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import IconRefresh from "@/components/Icons/IconRefresh";

interface Props {
    error: Error;
    reset: () => void;
}

function RootError({
    error,
    reset
}: Props) {
    return (
        <Container as='section' className="py-5 flex-grow-1 d-flex flex-column justify-content-center ">
            <Row>
                <Col xs={12} lg={{ span: 8, offset: 2 }}>
                    <h3 className='text-danger text-center display-3'>{error.message}</h3>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xs={12} lg={{ span: 6, offset: 3 }} className="d-flex justify-content-around align-items-center">
                    <CustomButtonWithLink href='/' variant='primary' classesButton="me-2 d-flex flex-row justify-content-center align-items-center">
                        <IconChevronLeft classes='me-1' />
                        Go home
                    </CustomButtonWithLink>

                    <CustomButton onClick={reset} variant="outline-primary" classesButton="ms-2 d-flex flex-row justify-content-center align-items-center">
                        Try Again
                        <IconRefresh classes="ms-1" />
                    </CustomButton>
                </Col>
            </Row>

        </Container>
    )
}

export default RootError