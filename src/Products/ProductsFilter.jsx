import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import data from "../db/data";

const ProductsFilter = () => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
    maxPrice: Infinity,
    color: "all",
    company: "all",
  });

  const filteredProducts = data.filter(
    ({ newPrice, category, color, company }) => {
      const matchCategory =
        filters.category === "all" || category === filters.category;

      const matchPrice =
        newPrice >= filters.minPrice && newPrice <= filters.maxPrice;

      const matchColor =
        filters.color === "all" || color === filters.color;

      const matchCompany =
        filters.company === "all" || company === filters.company;

      return matchCategory && matchPrice && matchColor && matchCompany;
    }
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <section className="card" key={product.title}>
          <img
            className="card-img"
            src={product.img}
            alt={product.category}
          />

          <div className="card-details">
            <h3 className="card-title">{product.title}</h3>

            <section className="card-reviews">
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar key={i} className="rating-star" />
                ))}
              <span className="total-reviews">
                ({product.reviews})
              </span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>${product.prevPrice}</del> ${product.newPrice}
              </div>

              <div className="bag">
                <BsFillBagHeartFill />
              </div>
            </section>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductsFilter;
