"use client"
import { useState } from 'react';
import uniqid from 'uniqid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"

import { Accessory } from '@/model/Accessory';
import { Steamer, SteamerVariant } from '@/model/Steamer';
import { Luggage } from '@/model/Luggage';

import ShopProductCard from './ShopProductCard';
import ShopVariantProductCard from './ShopVariantProductCard';
import ProductModal from '../ProductModal';

function ProductsTabs() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [productModal, setProductModal] = useState<Steamer | Accessory | Luggage | null>(null);

	const showModalHandler = (showBool: boolean, product?: Steamer | Accessory | Luggage) => {
		setShowModal(showBool)

		if (product) setProductModal(product)
	}

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
							{Object.values(steamers.besteam.variants).map((variant: SteamerVariant) => {
								return (
									<div className="col-12 col-md-4" key={uniqid()}>
										<ShopVariantProductCard
											product={steamers.besteam}
											variant={variant}
											showModalHandler={showModalHandler}
										/>
									</div>
								)
							})}
							{Object.values(steamers.besteamXl.variants).map((variant: SteamerVariant) => {
								return (
									<div className="col-12 col-md-4" key={uniqid()}>
										<ShopVariantProductCard
											product={steamers.besteamXl}
											variant={variant}
											showModalHandler={showModalHandler}
										/>
									</div>
								)
							})}
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

			{productModal && (
				<ProductModal
					product={productModal}
					showModal={showModal}
					showModalHandler={showModalHandler}
				/>
			)}
		</>
	)
}

export default ProductsTabs