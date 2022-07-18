import React from "react";

import caret from "./images/caret.svg";
import minus from "./images/minus.png";
import plus from "./images/plus.png";

export const ProductPurchase = ({ price }) => (
  <section className="elc-product__purchase">
    <div className="elc-product__purchase-grp">
      <div className="elc-product__purchase-item">
        Quantity
        <div className="elc-product__purchase-item-inner">
          <img
            src={minus}
            alt="Decrease Quantity"
            className="elc-product__quantity-minus"
          />
          <span>1</span>
          <img
            src={plus}
            alt="Increase Quantity"
            className="elc-product__quantity-plus"
          />
        </div>
      </div>
      <div className="elc-product__purchase-item">
        One Time Purchase
        <div className="elc-product__purchase-item-inner">
          <img src={caret} alt="Select Frequency" className="elc-product__purchase-frequency-img"/>
        </div>
      </div>
    </div>
    <div className="elc-product__purchase-grp">
      <div className="elc-product__purchase-item">
        <div className="elc-product__purchase-price">{price}</div>
      </div>
      <div className="elc-product__purchase-item">
        <button className="elc-button elc-product__purchase-add-button">
          Add To Bag
        </button>
      </div>
    </div>
  </section>
);
