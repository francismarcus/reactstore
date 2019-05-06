import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Container() {
  const [products, setProducts] = useState([]);

  async function fetch() {
    const results = await axios.get('http://localhost:8000/products');
    setProducts(results.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
    </>
  );
}
