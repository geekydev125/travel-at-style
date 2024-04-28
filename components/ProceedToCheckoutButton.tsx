import NextLink from 'next/link'

import CustomButton from './CustomButton'
import IconChevronRight from './Icons/IconChevronRight'

function ProceedToCheckoutButton() {
	return (
		<NextLink href='/checkout/review'>
			<CustomButton variant='primary' size='sm'>
				Proceed to checkout&nbsp;
				<IconChevronRight />
			</CustomButton>
		</NextLink>
	)
}

export default ProceedToCheckoutButton