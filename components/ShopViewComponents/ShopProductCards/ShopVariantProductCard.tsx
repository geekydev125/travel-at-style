import ShopProductCardPrice from './ShopProductCardComponents/ShopProductCardPrice'
import ShopProductCardImage from './ShopProductCardComponents/ShopProductCardImage'

import { Steamer, SteamerVariant } from '@/model/Steamer'
import { Luggage } from '@/model/Luggage'
import { Accessory } from '@/model/Accessory'
import ShopProductCardButtons from './ShopProductCardComponents/ShopProductCardButtons'

interface Props {
	product: Steamer,
	variant: SteamerVariant,
    showModalHandler: (showBool: boolean, product?: Steamer | Luggage | Accessory) => void
}

function ShopVariantProductCard({
	product,
	variant,
	showModalHandler
}: Props) {
	return (
		<div className="position-relative background-light-gradient">
			{/* <ShopProductCardPrice price={product.price} />

			<ShopProductCardImage imgUrl={`/assets/img/${product.imgFolder}/${variant.imgShop}`} product={product} showModalHandler={showModalHandler} />

			<ShopProductCardButtons product={product} showModalHandler={showModalHandler} variantColor={variant.color} /> */}
		</div>
	)
}

export default ShopVariantProductCard