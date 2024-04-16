"use client"
import React from 'react'
import uniqid from 'uniqid'

import ProductCard from '@/components/ProductCard'

import luggage from '@/data/luggage.json'

import { Luggage, LuggageVariant } from '@/model/Luggage'

function LuggagePage() {
	return (
		<section className="row gy-4">
			{
				Object.values(luggage).map((Luggage: Luggage) => {
					return (
						<React.Fragment key={uniqid()}>
							{
								Luggage.variants.map((variant:LuggageVariant) => {
									return (
										<div className="col-12 col-md-4" key={uniqid()}>
											<ProductCard product={Luggage} variant={variant} />
										</div>
									)
								})
							}
						</React.Fragment>
					)
				})
			}
		</section >
	)
}

export default LuggagePage