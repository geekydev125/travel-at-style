import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Accessory } from "@/model/Accessory"

interface Props {
    accessory: Accessory
}

function AccessoryCard({
    accessory
}: Props ) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/img/${accessory.imgFolder}/${accessory.img}`} />
            <Card.Body>
                <Card.Title>{accessory.name}</Card.Title>
                <Card.Text>
                    {accessory.description}
                </Card.Text>
                <Button variant="secondary">Get yours</Button>
            </Card.Body>
        </Card>
    )
}

export default AccessoryCard