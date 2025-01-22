import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
            <div className='descriptionbox-nav-box fade'>
                Reviews (122)
            </div>
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Discover a curated collection of exquisite treasures, where quality craftsmanship meets timeless design. Our online haven offers a unique shopping experience, blending effortless browsing with personalized recommendations. Indulge in the joy of discovering extraordinary finds and curate a life of beauty, one exceptional piece at a time.
        </p>
        <p>
        Experience the art of online shopping. Our thoughtfully curated selection features unique and inspiring pieces, hand-picked for their quality, design, and ability to elevate your everyday. Explore a world of possibilities, discover hidden gems, and create a home that truly reflects your personal style. Shop with confidence and enjoy the ease of effortless online shopping.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox;
