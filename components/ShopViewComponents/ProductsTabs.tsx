"use client"
import React from 'react';
import uniqid from 'uniqid';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"

import { Accessory } from '@/model/Accessory';
import { Steamer } from '@/model/Steamer';
import { Luggage } from '@/model/Luggage';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ShopProductCard from './ShopProductCards/ShopProductCard';
import ProductsTab from './ProductsTab';

function ProductsTabs() {
	return (
		<>
			<Tabs defaultActiveKey="steamers" className="mb-3" fill >

				<Tab eventKey="steamers" title="Steamers">
					<ProductsTab>
						{steamers.map((steamer: Steamer) => {
							return (
								<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
									<ShopProductCard product={steamer} />
								</div>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					<ProductsTab>
						{luggage.map((luggage: Luggage) => {
							return (
								<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
									<ShopProductCard product={luggage} />
								</div>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					<ProductsTab>
						{accessories.map((accessory: Accessory) => {
							return (
								<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
									<ShopProductCard product={accessory} />
								</div>
							)
						})}
					</ProductsTab>
				</Tab>
			</Tabs>

		</>
	)
}

export default ProductsTabs