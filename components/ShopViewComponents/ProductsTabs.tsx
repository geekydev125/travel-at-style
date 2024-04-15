"use client"
import uniqid from 'uniqid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"

import { Accessory } from '@/model/Accessory';

import ShopProductCard from './ShopProductCard';
import { Luggage } from '@/model/Luggage';

function ProductsTabs() {
	return (
		<>
			<Tabs
				defaultActiveKey="steamers"
				className="mb-3"
				fill
			>

				<Tab eventKey="steamers" title="Steamers">
					<p><small className='text-muted'>*Click on product's image/name for more info</small></p>
					<div className='container'>
						<div className='row gx-4 gy-5'>

						</div>
					</div>
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					<p><small className='text-muted'>*Click on product's image/name for more info</small></p>
					<div className='container'>
						<div className='row gx-4 gy-5'>
							{Object.values(luggage).map((luggage: Luggage) => {
								return (
									<div className="col-12 col-md-4" key={uniqid()}>
										<ShopProductCard product={luggage} />
									</div>
								)
							})}
						</div>
					</div>
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					<p><small className='text-muted'>*Click on product's image/name for more info</small></p>
					<div className='container'>
						<div className='row gx-4 gy-5'>
							{Object.values(accessories).map((accessory: Accessory) => {
								return (
									<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
										<ShopProductCard product={accessory} />
									</div>
								)
							})}
						</div>
					</div>
				</Tab>
			</Tabs>
		</>
	)
}

export default ProductsTabs