import React from 'react';
import styles from './Product.module.scss';

import DeleteProduct from './DeleteProduct/DeleteProduct';
import ProductQuantity from './ProductQuantity/ProductQuantity';

import headphones from '../../../../assets/images/headphones.png';

const Product = () => {

  return (
    <li className={styles.product}>
      <DeleteProduct />
      <div className={styles.product__imgWrapper}>
        <img
          className={styles.product__img}
          src={headphones}
          alt="product" />
      </div>
      <p className={styles.product__info}>Headphones</p>
      <p className={styles.product__info}>$11.90</p>
      <ProductQuantity />
    </li>
  );
}

export default Product;