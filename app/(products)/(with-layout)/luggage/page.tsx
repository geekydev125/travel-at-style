import { Metadata } from 'next'
import uniqid from 'uniqid'

import LuggageAccessoriesProductCard from '@/components/Pages/LuggageAccessories/LuggageAccessoriesProductCard'

import luggage from '@/data/luggage.json'

import Luggage from '@/model/Luggage'

import Col from 'react-bootstrap/Col'

export const metadata: Metadata = {
    title: "Luggage",
}

function LuggagePage() {
	return (
		<>
			{
				Object.values(luggage).map((Luggage: Luggage) => {
					return (
						<Col xs={12} sm={6} md={4} className="d-flex flex-grow-1" key={uniqid()}>
							<LuggageAccessoriesProductCard product={Luggage} />
						</Col>
					)
				})
			}
		</ >
	)
}

export default LuggagePage