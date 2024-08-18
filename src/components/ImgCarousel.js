import React, {useState} from 'react'


export const ImgCarousel = (images) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNext = ()=>{
    setCurrentImgIndex((prevIndex)=> (prevIndex+1)%images.length)
  }

  const handlePrev = () =>{
    setCurrentImgIndex((prevIndex)=> (prevIndex-1+images.length)%images.length)
  }
return {
  currentImgIndex,
  handleNext,
  handlePrev
}
}




