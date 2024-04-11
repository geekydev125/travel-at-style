"use client";
import Carousel from 'react-bootstrap/Carousel';

import { Steamer } from "@/model/Steamer"

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
                    <Carousel.Item key={index}>
                        <img
                            className="w-100"
                            src={`/assets/img/steamers/${steamerModel.imgFolder}/${variant.img}`}
                            alt={variant.color}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default ProductCarousel