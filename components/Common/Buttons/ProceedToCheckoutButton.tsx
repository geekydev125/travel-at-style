import IconChevronRight from '@/components/Icons/IconChevronRight'
import CustomButtonWithLink from '@/components/Common/Buttons/CustomButtonWithLink'

interface Props {
	handleDrawerClose?: () => void
}

function ProceedToCheckoutButton({
	handleDrawerClose
}: Props) {
	return (
		<CustomButtonWithLink href='/checkout/review' onClick={handleDrawerClose} variant='primary' size='sm'>
			Proceed to checkout&nbsp;
			<IconChevronRight />
		</CustomButtonWithLink>

	)
}

export default ProceedToCheckoutButton