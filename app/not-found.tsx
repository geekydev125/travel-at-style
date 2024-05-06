import NextLink from 'next/link'

import CustomButton from '@/components/Common/Buttons/CustomButton'

import Container from 'react-bootstrap/Container'

import IconChevronLeft from '@/components/Icons/IconChevronLeft'

function NotFound() {
    return (
        <Container as="section" className='h-100 w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5'>
            <h3 className='text-danger text-center display-3'>Oops! Looks like you've wandered off course...</h3>
            <p className='text-danger text-center display-6'>(404 Error - Page not found)</p>
            <div className='mt-3'>
                <NextLink href='/' >
                    <CustomButton variant='primary'>
                        <IconChevronLeft classes='me-1' />
                        Click here to go back home
                    </CustomButton>
                </NextLink>
            </div>
        </Container>
    )
}

export default NotFound