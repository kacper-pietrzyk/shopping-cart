import React from 'react';
import styles from './ShoppingCart.module.scss';

import ProductsWrapper from './ProductsWrapper/ProductsWrapper.jsx';
import Summary from './Summary/Summary.jsx';

const ShoppingCart = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <ProductsWrapper />
      <Summary />
    </div>
  );
}

export default ShoppingCart;