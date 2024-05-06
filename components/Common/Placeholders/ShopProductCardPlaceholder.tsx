import Placeholder from "react-bootstrap/Placeholder"


function ShopProductCardPlaceholder() {
    return (
        <>
            <div className="w-100 border" style={{ minHeight: '200px' }}>
                <Placeholder as="div" className="d-flex flex-row" animation="glow" >
                    <Placeholder xs={12} style={{ minHeight: '285px' }} />


                </Placeholder>

                <div className="bg-white">
                    <Placeholder animation="glow" className="w-100 d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-4">
                        <Placeholder xs={5} size="lg"/>

                        <Placeholder.Button variant="success" size="sm" xs={3} className='mt-sm-2 mt-xl-0' />
                    </Placeholder>
                </div>
            </div>
        </>
    )
}

export default ShopProductCardPlaceholder