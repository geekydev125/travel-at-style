import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

import Container from "react-bootstrap/Container"

interface Props {
    fontClass: string
}

function Footer({
    fontClass
}:Props) {
    return (
        <footer className={`${fontClass} background-pattern-wood`}>
            <TopFooter />
            
            <Container>
                <hr className="w-50 mx-auto" />
            </Container>

            <BottomFooter />
        </footer>
    )
}

export default Footer