import React from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsList from './ProductsList/ProductsList';
import Summary from './Summary/Summary';

import productsData from '../../assets/data/products.json';

const ShoppingCart = () => {

  const productsList = productsData;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <main className={styles.productsWrapper}>
        <ProductsList productsList={productsList} />
        <button className={styles.updateCart}>Update Shopping Cart</button>
      </main>
      <Summary />
    </div>
  );
}

export default ShoppingCart;