import React, { useReducer, useContext } from "react";
import cartReducer from "reducers";
import { initialState, Context } from "store";

export default function List(props) {
  const { store, dispatch } = useContext(Context);

  const ProductItems = props.products.map(product => (
    <div class="column">
      <div class="ui centered small card">
        <img
          class="ui centered small image"
          src={`products/${product.sku}.jpg`}
          alt={product.title}
        />
        <div class="content">
          <a class="header"> {product.title} </a>
          <div class="description">{product.description}</div>
        </div>
        <div class="extra content">
          <a>{product.price + " kr "}</a>
          <button
            class="ui basic right floated button"
            onClick={() => props.addProduct(product)} >
            <i class="shopping cart icon" />
            Lägg till
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div class="ui three column doubling stackable grid container">
        {ProductItems}
      </div>
    </>
  );
}
