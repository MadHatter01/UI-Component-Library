import React, { useState } from 'react'
import { ImgCarousel } from '../components/ImgCarousel'

const CarouselView = () => {
    const [images, setImages] = useState([
        'https://placehold.co/600x400',
        'https://placehold.co/500x400',
        'https://placehold.co/600x300'

    ])

    const handleNext = ()=>{
        console.log('next image')
    }

    const handlePrev = () =>{
        console.log('prev image')
    }
  return (
    <ImgCarousel 
    images={images}
    currentIndex={1}
    handleNext={handleNext}
    handlePrev={handlePrev} />
  )
}

export default CarouselView;