import React, { useState } from "react";

export default function Product(props) {
  const { product, onAdd } = props;

  let [size, setSize] = useState("button");
  const [flavours, setFlavours] = useState([]);
  
  let handleFlavorChange = (e) => {
    console.log(e.target.value);
    // setFruit(e.target.value)
  };

  let handleSizeChange = (e) => {
    // console.log(e.target.value);
    
    const variants = product.variants.filter((variant) => 
   variant.size === e.target.value
      
    )
    if (variants[0]){
      setFlavours(variants[0].flavors);
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
            // backgroundSize: "cover",
          }}
        />
        <button> {size}</button>
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
            {
            
            flavours.map((flavor) => (
              <option key={flavor} value={flavor}>
                {flavor}
              </option>
            ))
            }
          </select>
        </div>
      </div>
      <div className="extra content">
        <div className="ui tag labels">
          <a className="ui label">${product.price}</a>
        </div>
        <button className="ui button" onClick={() => onAdd(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}