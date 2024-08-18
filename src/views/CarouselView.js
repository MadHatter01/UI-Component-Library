import React, { useState } from 'react'
import { ImgCarousel } from '../components/ImgCarousel'
import ImgCarouselView from '../components/ImgCarouselView'

const CarouselView = () => {
    const [images, setImages] = useState([
        'https://placehold.co/600x400',
        'https://placehold.co/500x400',
        'https://placehold.co/600x300'

    ])

const {currentImgIndex, handleNext, handlePrev} = ImgCarousel(images);
  return (
    <ImgCarouselView 
    images={images}
    currentIndex={currentImgIndex}
    handleNext={handleNext}
    handlePrev={handlePrev} />
  )
}

export default CarouselView;