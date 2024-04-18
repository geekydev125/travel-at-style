"use client"
import React from 'react'
import uniqid from 'uniqid'

import ProductCard from '@/components/ProductCard'

import luggage from '@/data/luggage.json'

import { Luggage } from '@/model/Luggage'

function LuggagePage() {
	return (
		<section className="row gx-2 gx-md-3 gy-4 d-flex flex-row align-items-stretch">
			{
				Object.values(luggage).map((Luggage: Luggage) => {
					return (
						<div className="col-12 col-sm-6 col-md-4 d-flex flex-grow-1" key={uniqid()}>
							<ProductCard product={Luggage} />
						</div>
					)
				})
			}
		</section >
	)
}

export default LuggagePage