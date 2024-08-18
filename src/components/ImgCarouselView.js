import React from 'react'

const ImgCarouselView = ({images, currentIndex, handleNext, handlePrev}) => {
        return (
          <div className='carousel'>
              <button onClick={handlePrev}>Prev</button>
              <img src={images[currentIndex]} className='carousel-img' alt='carousel-img' />
              <button onClick={handleNext}>Next</button>
          </div>
        )
      }
      
export default ImgCarouselView;
      