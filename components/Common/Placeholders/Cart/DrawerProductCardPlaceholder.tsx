import IconPhoto from '@/components/Icons/IconPhoto'

import Placeholder from 'react-bootstrap/Placeholder'

function DrawerProductCardPlaceholder() {
    return (
        <div className="border h-100 d-flex flex-column">
            <Placeholder as="div" className="d-flex flex-row" animation="glow" >
                <Placeholder
                    xs={12}
                    className="d-flex flex-row justify-content-center align-items-center"
                    style={{ minHeight: '124px' }}
                >
                    <IconPhoto stroke="black" width="50px" height="50px" />
                </Placeholder>
            </Placeholder>

            <div className="bg-white">
                <Placeholder animation="glow" className="w-100 d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-3">

                    <Placeholder.Button variant="danger" size="sm" xs={1} className='p-0' style={{ height: '25px', width: '25px' }} />

                    <Placeholder xs={{ span: 4 }} />

                    <Placeholder.Button variant="success" size="sm" xs={1} className='p-0' style={{ height: '25px', width: '25px' }} />
                </Placeholder>
            </div>
        </div>
    )
}

export default DrawerProductCardPlaceholder