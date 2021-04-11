import React, { useState } from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsList from './ProductsList/ProductsList';
import Summary from './Summary/Summary';

import productsData from '../../assets/data/products.json';
import productsQuantity from '../../assets/data/cart_products.json';

const ShoppingCart = () => {

  const productsList = productsData;
  const initialQuantity = productsQuantity;
  const [productsQty, setProductsQty] = useState(initialQuantity);

  const handleButtonQuantity = e => {
    const index = e.target.id - 1;
    const action = e.target.name;
    const newProducstQty = [...productsQty];

    if (action === "remove" && newProducstQty[index].quantity > 0) {
      newProducstQty[index].quantity--;
    } else if (action === "add") {
      newProducstQty[index].quantity++;
    }

    setProductsQty(newProducstQty);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <main className={styles.productsWrapper}>
        <ProductsList
          productsList={productsList}
          productsQty={productsQty}
          handleButtonQuantity={handleButtonQuantity}
        />
        <button className={styles.updateCart}>Update Shopping Cart</button>
      </main>
      <Summary />
    </div>
  );
}

export default ShoppingCart;