"use client"
import { useSearchParams } from 'next/navigation';
import uniqid from 'uniqid';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"

import Accessory from '@/model/Accessory';
import Steamer from '@/model/Steamer';
import Luggage from '@/model/Luggage';

import ShopProductCard from './ShopProductCards/ShopProductCard';
import ProductsTab from './ProductsTab';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from "react-bootstrap/Col"

function ProductsTabs({ }) {
	const searchParams = useSearchParams()
	const defaultTab = searchParams.get('tab') || 'steamers'

	return (
		<section className='py-4'>
			<Tabs justify variant='pills' defaultActiveKey={defaultTab} className='custom-tabs mb-3' >
				<Tab eventKey="steamers" title="Steamers">
					<ProductsTab>
						{steamers.map((steamer: Steamer) => {
							return (
								<Col xs={12} sm={6} lg={4} key={uniqid()}>
									<ShopProductCard product={steamer} />
								</Col>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					<ProductsTab>
						{luggage.map((luggage: Luggage) => {
							return (
								<Col xs={12} sm={6} lg={4} key={uniqid()}>
									<ShopProductCard product={luggage} />
								</Col>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					<ProductsTab>
						{accessories.map((accessory: Accessory) => {
							return (
								<Col xs={12} sm={6} lg={4} key={uniqid()}>
									<ShopProductCard product={accessory} />
								</Col>
							)
						})}
					</ProductsTab>
				</Tab>
			</Tabs>

		</section>
	)
}

export default ProductsTabs