import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import "./Products.css";
const Products = () => {
  return (
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg" alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHearFill></BsFillBagHearFill>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Products