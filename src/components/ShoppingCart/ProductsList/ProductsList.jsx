import React from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product';

const ProductsList = () => {

  return (

    <ul className={styles.productsList}>
      <li className={styles.productsList__header}>
        <p className={styles.productsList__name}>Product Name</p>
        <p className={styles.productsList__price}>Unit Price</p>
        <p className={styles.productsList__qty}>Qty</p>
      </li>
      <Product />
    </ul>
  );
}

export default ProductsList;