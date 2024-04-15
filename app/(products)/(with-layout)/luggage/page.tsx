"use client"
import uniqid from 'uniqid'

import ProductCard from '@/components/ProductCard'

import luggage from '@/data/luggage.json'

import { Luggage } from '@/model/Luggage'

function LuggagePage() {
	return (
		<section className="row gy-4">
			{
				Object.values(luggage).map((accessory: Luggage) => {
					return (
						<div className="col-12 col-md-4" key={uniqid()}>
							<ProductCard product={accessory} />
						</div>
					)
				})
			}
		</section>
	)
}

export default LuggagePage