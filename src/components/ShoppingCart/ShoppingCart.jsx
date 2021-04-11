import React, { useState, useEffect } from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsList from './ProductsList/ProductsList';
import Summary from './Summary/Summary';

import productsData from '../../assets/data/products.json';
import productsQuantity from '../../assets/data/cart_products.json';

const ShoppingCart = () => {

  const productsList = productsData;
  const initialQuantity = productsQuantity;

  const [productsQty, setProductsQty] = useState(initialQuantity);
  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = () => {
    let sum = 0;
    for (let i = 0; i < productsList.length; i++) {
      sum += productsList[i].price * productsQty[i].quantity;
    }
    setSubtotal(sum);
  }

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < productsList.length; i++) {
      sum += productsList[i].price * initialQuantity[i].quantity;
    }
    setSubtotal(sum);
  }, [productsList, initialQuantity]);

  const handleQuantityChange = e => {
    const index = e.target.id - 1;
    const newProducstQty = [...productsQty];

    if (e.target.tagName === "BUTTON") {
      const action = e.target.name;
      if (action === "remove" && newProducstQty[index].quantity > 0) {
        newProducstQty[index].quantity--;
      } else if (action === "add") {
        newProducstQty[index].quantity++;
      }
    } else {
      if (e.target.value >= 0) {
        newProducstQty[index].quantity = e.target.value;
      } else {
        newProducstQty[index].quantity = 0;
      }
    }
    setProductsQty(newProducstQty)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <main className={styles.productsWrapper}>
        <ProductsList
          productsList={productsList}
          productsQty={productsQty}
          handleQuantityChange={handleQuantityChange}
          calculateSubtotal={calculateSubtotal}
        />
        <button
          className={styles.updateCart}
          onClick={calculateSubtotal}
        >
          Update Shopping Cart
          </button>
      </main>
      <Summary
        subtotal={subtotal}
      />
    </div>
  );
}

export default ShoppingCart;