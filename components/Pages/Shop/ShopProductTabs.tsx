"use client"
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useNotificationContext } from '@/context/notificationContext';

import { ISteamer } from '@/model/Steamer';
import { ILuggage } from '@/model/Luggage';
import { IAccessory } from '@/model/Accessory';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ProductsContentWrapper from '../../ProductsContentWrapper';
import { baseUrl } from '@/lib/baseUrl';

export type TActiveTab = "steamers" | "luggage" | "accessories";

export interface IProducts {
	steamers: ISteamer[] | []
	luggage: ILuggage[] | []
	accessories: IAccessory[] | []
}

function ShopProductsTabs() {
	const { displayNotification } = useNotificationContext()
	const searchParams = useSearchParams()
	const defaultTab = searchParams.get('tab') as TActiveTab || 'steamers'
	const [activeTab, setActiveTab] = useState<TActiveTab>(defaultTab)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const [products, setProducts] = useState<IProducts>({
		steamers: [],
		luggage: [],
		accessories: []
	})

	const productsLoader = useCallback(() => {
		fetch(`${baseUrl}/api/products/${activeTab}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts((prev) => ({
					...prev,
					[activeTab]: data
				}))
				setIsLoading(false)
			}).catch((error) => {
				displayNotification("An error occurred while fetching the requested resource", 'error')
			})
	}, [activeTab])

	useEffect(() => {
		if (products[activeTab].length === 0) {
			setIsLoading(true)
			productsLoader()
		}
	}, [activeTab])

	return (
		<section className='py-4'>
			<Tabs onSelect={(activeKey) => setActiveTab(activeKey as TActiveTab)} justify variant='pills' defaultActiveKey={defaultTab ?? ''} className='custom-tabs mb-3' >
				<Tab eventKey="steamers" title="Steamers">
					<ProductsContentWrapper products={products.steamers} isLoading={isLoading} cardType='shop'/>
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					<ProductsContentWrapper products={products.luggage} isLoading={isLoading} cardType='shop'/>
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					<ProductsContentWrapper products={products.accessories} isLoading={isLoading} cardType='shop'/>
				</Tab>
			</Tabs>
		</section>
	)
}

export default ShopProductsTabs