"use client"
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

import steamers from "@/data/steamers.json"
import luggage from "@/data/luggage.json"
import accessories from "@/data/accessories.json"


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import AirplaneLoader from '../Common/Loader/AirplaneLoader';

const ProductsTabDynamic = dynamic(() => import('@/components/ShopViewComponents/ProductsTab'), {
	loading: () => <AirplaneLoader hasLogo={false} />,
	ssr: false
})

function ProductsTabs({ }) {
	const searchParams = useSearchParams()
	const defaultTab = searchParams.get('tab') || 'steamers'
	const [activeTab, setActiveTab] = useState<string>(defaultTab)

	return (
		<section className='py-4'>
			<Tabs onSelect={(activeKey) => setActiveTab(activeKey as string)} justify variant='pills' defaultActiveKey={defaultTab ?? ''} className='custom-tabs mb-3' >
				<Tab eventKey="steamers" title="Steamers">
					{ activeTab === 'steamers' && <ProductsTabDynamic products={steamers} /> }
				</Tab>

				<Tab eventKey="luggage" title="Luggage">
					{ activeTab === 'luggage' && <ProductsTabDynamic products={luggage} /> }
				</Tab>

				<Tab eventKey="accessories" title="Accessories">
					{ activeTab === 'accessories' && <ProductsTabDynamic products={accessories} /> }
				</Tab>
			</Tabs>
		</section>
	)
}

export default ProductsTabs