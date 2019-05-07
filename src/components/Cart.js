import React, { useEffect, useReducer, useContext } from "react";

import cartReducer  from "reducers";
import { initialState, Context } from "store";

export default function List(props) {
  const { store, dispatch } = useContext(Context);

  const Items = store.map(product => (
    <div class="ui divided items">
      <div class="item">
        <div class="ui tiny image">
          <img src={`products/${product.sku}.jpg`} />
        </div>
        <div class="content">
          <a class="header">{product.title}</a>
          <div class="meta">
            <span>{product.description}</span>
          </div>
          <div class="description">
            <p />
          </div>
          <div class="extra">{product.price + " kr "}</div>
          <button
            class="small ui right floated button"
            onClick={() => props.removeProduct(product)} >
            Delete
            <i class="right chevron icon" />
          </button>
        </div>
      </div>
    </div>
  ));

    const Price = store.map(product => {
      return product.price;
    });

    const Total = Price.reduce((previous, product) => {
      return (product += previous);
    }, 0);

    return (
      <>
        {Total === 0 ? (
          ""
        ) : (
          <div class="ui column doubling container">
            <div class="ui divider" />
            {Items}
            <div class="ui column doubling grid">
              <div class="column">
                <div class="ui cards">
                  <div class="card">
                    <div class="middle aligned content">
                      <div class="header">Subtotal is {Total + " kr "}</div>
                      <button
                        class="tiny ui right floated button"
                        onClick={() => alert("Det går bra att swisha ;)")}
                      >
                        Checkout
                        <i class="right chevron icon" />
                      </button>
                      <div class="meta">Procceed to checkout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
