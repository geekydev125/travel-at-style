import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

import Container from "react-bootstrap/Container"

function Footer() {
    return (
        <footer className='background-pattern-wood'>
            <TopFooter />
            
            <Container>
                <hr className="w-50 mx-auto" />
            </Container>

            <BottomFooter />
        </footer>
    )
}

export default Footer