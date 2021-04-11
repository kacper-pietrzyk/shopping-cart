import React from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsList from './ProductsList/ProductsList.jsx';
import Summary from './Summary/Summary.jsx';

const ShoppingCart = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <main className={styles.productsWrapper}>
        <ProductsList />
        <button className={styles.updateCart}>Update Shopping Cart</button>
      </main>
      <Summary />
    </div>
  );
}

export default ShoppingCart;