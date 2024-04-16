"use client"
import React from 'react';
import uniqid from 'uniqid';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"

import { Accessory, AccessoryVariant } from '@/model/Accessory';
import { Steamer, SteamerVariant } from '@/model/Steamer';
import { Luggage, LuggageVariant } from '@/model/Luggage';

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
						{Object.values(steamers).map((steamer: Steamer) => {
							return (
								<React.Fragment key={uniqid()}>
									{
										Object.values(steamer.variants).map((variant: SteamerVariant) => {
											return (
												<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
													<ShopProductCard
														product={steamer}
														variant={variant}
													/>
												</div>
											)
										})
									}
								</React.Fragment>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					<ProductsTab>
						{Object.values(luggage).map((luggage: Luggage) => {
							return (
								<React.Fragment key={uniqid()}>
									{
										Object.values(luggage.variants).map((variant: LuggageVariant) => {
											return (
												<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
													<ShopProductCard
														product={luggage}
														variant={variant}
													/>
												</div>
											)
										})
									}
								</React.Fragment>
							)
						})}
					</ProductsTab>
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					<ProductsTab>
						{Object.values(accessories).map((accessory: Accessory) => {
							return (
								<React.Fragment key={uniqid()}>
									{
										Object.values(accessory.variants).map((variant: AccessoryVariant) => {
											return (
												<div className="col-12 col-sm-6 col-lg-4" key={uniqid()}>
													<ShopProductCard
														product={accessory}
														variant={variant}
													/>
												</div>
											)
										})
									}
								</React.Fragment>
							)
						})}
					</ProductsTab>
				</Tab>
			</Tabs>

		</>
	)
}

export default ProductsTabs