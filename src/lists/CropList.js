import React from 'react'
import image from '../assets/favicon.png'


const CropList = () => {

    const images = [
        {
            id: 1,
            image: image
        },
        {
            id: 2,
            image: image
        },
        {
            id: 3,
            image: image
        },

    ]

  return (
    <>
    <div>"we currently gives the solution in three as of crops, vegetables and fruits where pathologistb under go with AI based diagnosis and then prefer certain chemical based solution , fertilizer calculator will process the soil health and the yield of the crop. the package of practice will give the and continous information exchangev mode will makle it happenn all the wayn to the farmers growth the growth of farmers growth of thew world and nation. "</div>
    <div>
        {images.map((image) => (
            <img src={image.image} alt="loading..." />
        ))}
    </div>
    </>
  )
}

export default CropList