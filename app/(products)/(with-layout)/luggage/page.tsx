"use client"
import React from 'react'
import uniqid from 'uniqid'

import ProductCard from '@/components/ProductCard'

import luggage from '@/data/luggage.json'

import { Luggage } from '@/model/Luggage'

import Col from 'react-bootstrap/Col'

function LuggagePage() {
	return (
		<>
			{
				Object.values(luggage).map((Luggage: Luggage) => {
					return (
						<Col className="col-12 col-sm-6 col-md-4 d-flex flex-grow-1" key={uniqid()}>
							<ProductCard product={Luggage} />
						</Col>
					)
				})
			}
		</ >
	)
}

export default LuggagePage