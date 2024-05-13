
import IconChevronLeft from '@/components/Icons/IconChevronLeft'
import CustomButtonWithLink from '@/components/Common/Buttons/CustomButtonWithLink'

import Container from 'react-bootstrap/Container'

function NotFound() {
    return (
        <Container as="section" className='h-100 w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5'>
            <h3 className='text-danger text-center display-3'>Oops! Looks like you've wandered off course...</h3>
            <p className='text-danger text-center display-6'>(404 Error - Page not found)</p>
            <div className='mt-3'>
                <CustomButtonWithLink href='/' variant='primary' classesButton='d-flex flex-row justify-content-center align-items-center'>
                    <IconChevronLeft classes='me-1' />
                    Go home
                </CustomButtonWithLink>
            </div>
        </Container>
    )
}

export default NotFound