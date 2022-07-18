import React from "react";
import { ProductImage } from "./ProductImage";

export const ProductGrid = ({
  heading,
  cta1,
  p1Name,
  p1Img,
  p1Price,
  p2Name,
  p2Img,
  p2Price,
  p3Name,
  p3Img,
  p3Price,
  p4Name,
  p4Img,
  p4Price,
}) => (
  <section className="elc-product__grid-section-inner">
    <div className="elc-product-card">
      <div className="elc-product-card__img-wrapper">
        <ProductImage image={p1Img} />
      </div>
      <div className="elc-product-card__body-wrapper">
        <div className="elc-product-card__heading">
          <h1 className="elc-product-card__heading-text">{p1Name}</h1>
        </div>
        <div className="elc-product-card__price">
          <h4 className="elc-product-card__price-text">{p1Price}</h4>
        </div>
        <div className="elc-product-card__shop">
          <button className="elc-button elc-product-card__shop-button">{cta1}</button>
        </div>
      </div>
    </div>
    <div className="elc-product-card">
      <div className="elc-product-card__img-wrapper">
        <ProductImage image={p2Img} />
      </div>
      <div className="elc-product-card__body-wrapper">
        <div className="elc-product-card__heading">
          <h1 className="elc-product-card__heading-text">{p2Name}</h1>
        </div>
        <div className="elc-product-card__price">
          <h4 className="elc-product-card__price-text">{p2Price}</h4>
        </div>
        <div className="elc-product-card__shop">
          <button className="elc-button elc-product-card__shop-button">{cta1}</button>
        </div>
      </div>
    </div>
    <div className="elc-product-card">
      <div className="elc-product-card__img-wrapper">
        <ProductImage image={p3Img} />
      </div>
      <div className="elc-product-card__body-wrapper">
        <div className="elc-product-card__heading">
          <h1 className="elc-product-card__heading-text">{p3Name}</h1>
        </div>
        <div className="elc-product-card__price">
          <h4 className="elc-product-card__price-text">{p3Price}</h4>
        </div>
        <div className="elc-product-card__shop">
          <button className="elc-button elc-product-card__shop-button">{cta1}</button>
        </div>
      </div>
    </div>
    <div className="elc-product-card">
      <div className="elc-product-card__img-wrapper">
        <ProductImage image={p4Img} />
      </div>
      <div className="elc-product-card__body-wrapper">
        <div className="elc-product-card__heading">
          <h1 className="elc-product-card__heading-text">{p4Name}</h1>
        </div>
        <div className="elc-product-card__price">
          <h4 className="elc-product-card__price-text">{p4Price}</h4>
        </div>
        <div className="elc-product-card__shop">
          <button className="elc-button elc-product-card__shop-button">{cta1}</button>
        </div>
      </div>
    </div>
  </section>
);
