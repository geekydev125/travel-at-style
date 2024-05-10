import { Metadata } from 'next'
import uniqid from 'uniqid'

import ProductCard from '@/components/Common/Cards/Product/ProductCard'

import luggage from '@/data/luggage.json'

import { ILuggage } from '@/model/Luggage'

import Col from 'react-bootstrap/Col'

export const metadata: Metadata = {
    title: "Luggage",
}

function LuggagePage() {
	return (
		<>
			{
				luggage.map((product: ILuggage) => {
					return (
						<Col xs={12} sm={6} md={4} className="d-flex flex-grow-1" key={uniqid()}>
							<ProductCard product={product} />
						</Col>
					)
				})
			}
		</ >
	)
}

export default LuggagePage