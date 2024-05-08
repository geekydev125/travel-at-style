import { redirect } from 'next/navigation';

function CheckoutPage() {
    redirect('/checkout/review');
}

export default CheckoutPage