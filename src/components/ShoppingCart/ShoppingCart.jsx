import React, { useState, useEffect } from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsList from './ProductsList/ProductsList';
import Summary from './Summary/Summary';

import productsData from '../../assets/data/products.json';
import productsQuantity from '../../assets/data/cart_products.json';

const ShoppingCart = () => {

  const initialProductsList = productsData;
  const initialQuantity = productsQuantity;

  const [productsList, setProductsList] = useState(initialProductsList);
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
    for (let i = 0; i < initialProductsList.length; i++) {
      sum += initialProductsList[i].price * initialQuantity[i].quantity;
    }
    setSubtotal(sum);
  }, [initialProductsList, initialQuantity]);

  const handleQuantityChange = e => {
    const newProducstQty = [...productsQty];
    const id = Number(e.target.id);
    const index = newProducstQty.findIndex(product => product.productId === id);

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

  const handleProductDelete = id => {
    const newProductsList = productsList.filter(product => product.id !== id);
    const newProductsQty = productsQty.filter(product => product.productId !== id);
    setProductsList(newProductsList);
    setProductsQty(newProductsQty);

    let sum = 0;
    for (let i = 0; i < newProductsList.length; i++) {
      sum += newProductsList[i].price * newProductsQty[i].quantity;
    }
    setSubtotal(sum);
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
          handleProductDelete={handleProductDelete}
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