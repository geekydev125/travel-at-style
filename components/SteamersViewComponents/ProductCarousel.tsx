"use client";
import Carousel from 'react-bootstrap/Carousel';

import { Steamer } from "@/model/Steamer"
import uniqid from 'uniqid';

interface Props {
    carouselId: string,
    steamers: Steamer[],
    indicatorLabels: string[]
}

function ProductCarousel({
    carouselId,
    steamers,
    indicatorLabels
}: Props) {
    return (
        <Carousel id={carouselId} controls={false} fade indicators={true} indicatorLabels={indicatorLabels}>
            {
                steamers.map((steamer, index) => (
                    <Carousel.Item key={uniqid()}>
                        <img
                            className="w-100"
                            src={`/assets/img/${steamer.imgFolder}/${steamer.imgSpecial}`}
                            alt={steamer.color}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default ProductCarousel