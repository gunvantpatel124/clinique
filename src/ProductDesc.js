import React from "react";

import caret from "./images/caret.svg";

export const ProductDesc = ({
  category,
  name,
  description,
  rating,
  features,
  shade,
}) => (
  <section className="elc-product__desc-section-inner">
    <h4 className="elc-product__desc-section-heading">{category}</h4>
    <h2 className="elc-product__desc-section-product-name">{name}</h2>
    <p className="elc-product__desc-section-description">{description}</p>
    <div className="elc-product__rating">
      <figure className="elc-product__rating-figure">
        <div className="elc-product__rating-img-wrapper">
          <img
            src={rating}
            alt="Product Rating"
            className="elc-product__rating-img"
          />
        </div>
        <div className="elc-product__rating-caret-wrapper">
          <img
            src={caret}
            alt="View All Ratings"
            className="elc-product__rating-caret"
          />
        </div>
      </figure>
    </div>
    <section className="elc-product__features">
      <div className="elc-product__features-item-grp">
        <div className="elc-product__features-item">
          <h4 className="elc-product__features-heading">Benefits</h4>
          <p className="elc-product__features-info">{features.benefits}</p>
        </div>
        <div className="elc-product__features-item">
          <h4 className="elc-product__features-heading">Finish</h4>
          <p className="elc-product__features-info">{features.finish}</p>
        </div>
      </div>
      <div className="elc-product__features-item-grp">
        <div className="elc-product__features-item">
          <h4 className="elc-product__features-heading">Coverage</h4>
          <p className="elc-product__features-info">{features.coverage}</p>
        </div>
        <div className="elc-product__features-item">
          <h4 className="elc-product__features-heading">Key Ingredients</h4>
          <p className="elc-product__features-info">
            {features.keyIngredients}.
            <a
              href="http://www.clinique.com"
              className="elc-product__features-link"
            >
              More
            </a>
          </p>
        </div>
      </div>
    </section>
    <section className="elc-product__shade">
      <button className="elc-button elc-product__shade-button">
        <div className="elc-product__shade-wrapper">
          <span className="elc-product__shade-name">{shade.name}</span>
          <div
            style={{ background: shade.color }}
            className="elc-product__shade-color"
          ></div>
        </div>
      </button>
    </section>
  </section>
);
