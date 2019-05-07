import React, { useState, useEffect, useReducer } from "react";
import { Context, initialState } from "store";
import cartReducer from "reducers";
import axios from "axios";
import List from "components/List";
import Cart from "components/Cart";
import Header from "components/Header";

export default function Component() {
  const [products, setProducts] = useState([]);
  const [store, dispatch] = useReducer(cartReducer, initialState);

  async function fetch() {
    const results = await axios.get('http://localhost:8000/products');
    setProducts(results.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  const addProduct = product => {
    dispatch({ type: "ADD", payload: product });
  };

  const removeProduct = product => {
    dispatch({ type: "REMOVE", payload: product });
  };

  return (
    <Context.Provider value={{ store, dispatch }}>
      <>
        <Header />
        <List products={products} addProduct={addProduct} />
        <Cart removeProduct={removeProduct} />
      </>
    </Context.Provider>
  );
}
