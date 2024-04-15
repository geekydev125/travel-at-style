import { Steamer, SteamerVariant } from '@/model/Steamer'

import styles from './ShopProductCard.module.scss'

import Button from 'react-bootstrap/Button'
import ShopProductCardPrice from './ShopProductCardComponents/ShopProductCardPrice'

interface Props {
	product: Steamer,
	variant: SteamerVariant,
    showModalHandler: (showBool: boolean, product?: Steamer) => void
}

function ShopVariantProductCard({
	product,
	variant,
	showModalHandler
}: Props) {
	return (
		<div className="position-relative background-light-gradient" style={{ backgroundColor: 'lightgray' }}>
			<ShopProductCardPrice price={product.price} />

			<div className="overflow-hidden position-relative" >
				<img onClick={() => showModalHandler(true, product)} className={`img-fluid ${styles['shop-product-card-img']} `} src={`/assets/img/${product.imgFolder}/${variant.imgShop}`} alt={product.name} />
			</div>

			<div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">

				<Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0">{product.name} ({variant.color})</Button>
				<Button variant='button' className="btn btn-success btn-sm me-2">Add to cart</Button>
			</div>

		</div>
	)
}

export default ShopVariantProductCard