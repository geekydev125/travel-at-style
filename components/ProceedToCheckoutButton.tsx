import NextLink from 'next/link'

import CustomButton from './CustomButton'
import IconChevronRight from './Icons/IconChevronRight'

interface Props {
    handleDrawerClose: () => void
}

function ProceedToCheckoutButton({
    handleDrawerClose
}:Props) {
	return (
		<NextLink href='/checkout/review' onClick={ handleDrawerClose }>
			<CustomButton variant='primary' size='sm'>
				Proceed to checkout&nbsp;
				<IconChevronRight />
			</CustomButton>
		</NextLink>
	)
}

export default ProceedToCheckoutButton