"use client"
import IconPhoto from "@/components/Icons/IconPhoto"

import Placeholder from "react-bootstrap/Placeholder"

function CardPlaceholder() {
    return (
        <>
            <div className="w-100 border">
                <Placeholder as="div" animation="glow" >
                    <Placeholder
                        xs={12}
                        className="d-flex flex-row justify-content-center align-items-center"
                        style={{ minHeight: '220px' }}
                    >
                        <IconPhoto stroke="black" width="50px" height="50px" />

                    </Placeholder>

                </Placeholder>

                <div className="bg-white">
                    <Placeholder animation="glow" className="w-100 d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-4">
                        <Placeholder xs={5} size="lg" />

                        <Placeholder.Button variant="success" size="sm" xs={4} className='mt-sm-2 mt-xl-0 py-1' />
                    </Placeholder>
                </div>
            </div>
        </>
    )
}

export default CardPlaceholder