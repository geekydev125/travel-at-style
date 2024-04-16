"use client";
import Carousel from 'react-bootstrap/Carousel';

import { Steamer } from "@/model/Steamer"
import uniqid from 'uniqid';

interface Props {
    carouselId: string,
    steamerModel: Steamer,
    indicatorLabels: string[]
}

function ProductCarousel({
    carouselId,
    steamerModel,
    indicatorLabels
}: Props) {
    return (
        <Carousel id={carouselId} controls={false} fade indicators={true} indicatorLabels={indicatorLabels}>
            {
                steamerModel.variants.map((variant, index) => (
                    <Carousel.Item key={uniqid()}>
                        <img
                            className="w-100"
                            src={`/assets/img/${steamerModel.imgFolder}/${variant.imgSpecial}`}
                            alt={variant.color}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default ProductCarousel