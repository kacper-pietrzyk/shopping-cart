import React from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product.jsx';

const ProductsList = () => {

  return (

    <ul className={styles.productsList}>
      <li className={`${styles.productsList__product} ${styles.productsList__header}`}>
        <p className={styles.product__name}>Product Name</p>
        <p className={styles.product__price}>Unit Price</p>
        <p className={styles.product__qty}>Qty</p>
      </li>
      <Product />
    </ul>
  );
}

export default ProductsList;