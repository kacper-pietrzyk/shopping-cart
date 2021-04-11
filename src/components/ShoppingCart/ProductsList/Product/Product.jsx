import React from 'react';
import styles from './Product.module.scss';

import DeleteProduct from './DeleteProduct/DeleteProduct';
import ProductQuantity from './ProductQuantity/ProductQuantity';

const Product = ({ id, name, image, price, quantity, handleQuantityChange, calculateSubtotal }) => {

  const imageSrc = require(`../../../../assets/images/${image}`).default;

  return (
    <li className={styles.product}>
      <DeleteProduct />
      <div className={styles.product__imgWrapper}>
        <img
          className={styles.product__img}
          src={imageSrc}
          alt="product" />
      </div>
      <p className={styles.product__info}>{name}</p>
      <p className={styles.product__info}>${price.toFixed(2)}</p>
      <ProductQuantity
        id={id}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        calculateSubtotal={calculateSubtotal}
      />
    </li>
  );
}

export default Product;