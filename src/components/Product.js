import React, { useState } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addProduct} from "../redux-reducers/cart/actions"
 function Product({ product, addProduct }) {
  // const { product, onAdd } = props;

  let [size, setSize] = useState([]);
  const [price, setPrice] = useState([product.price]);
  const [enableBtn, setEnableBtn] = useState([true]);
  const [flavours, setFlavours] = useState([]);

  let handleFlavorChange = (e) => {
    setEnableBtn(false);
  };

  let handleSizeChange = (e) => {
    const variants = product.variants.filter(
      (variant) => variant.size === e.target.value
    );
    console.log(variants);
    if (variants[0]) {
      setFlavours(variants[0].flavors);
      setPrice(variants[0].price);
    }
    setSize(e.target.value);
  };

  return (
    <div className="ui card col-3 m-0 p-0">
      <div className="image">
        <img
          src={product.image_url}
          alt={product.name}
          style={{
            height: "400px",
          }}
        />
      </div>
      <div className="content">
        <a className="header">{product.name}</a>
        <div className="meta">
          <select className="ui dropdown" onChange={handleSizeChange}>
            <option value="">Serving Size</option>
            {product.variants.map((variant) => (
              <option key={variant.size} value={variant.size}>
                {variant.size}
              </option>
            ))}
          </select>
          <select className="ui dropdown" onChange={handleFlavorChange}>
            <option value="">Flavors</option>
            {flavours.map((flavor) => (
              <option key={flavor} value={flavor}>
                {flavor}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="extra content">
        <div className="ui tag labels">
          <a className="ui label">${price}</a>
        </div>
        <button
          className="ui button"
          disabled={enableBtn}
          onClick={() => addProduct(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);