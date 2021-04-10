import React from 'react';
import styles from './ProductsWrapper.module.scss';

import headphones from '../../../assets/images/headphones.png';
import edit from '../../../assets/images/edit-img.png';
import deleteSign from '../../../assets/images/x-img.png';

const ProductsWrapper = () => {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.productsList}>
        <li className={`${styles.productsList__product} ${styles.productsList__header}`}>
          <p className={styles.product__name}>Product Name</p>
          <p className={styles.product__price}>Unit Price</p>
          <p className={styles.product__qty}>Qty</p>
        </li>
        <li className={styles.productsList__product}>
          <button className={styles.product__delete}>
            <img className={styles.product__deleteImg} src={deleteSign} alt="delete sign" />
          </button>
          <div className={styles.product__imgWrapper}>
            <img
              className={styles.product__img}
              src={headphones}
              alt="product" />
          </div>
          <p className={styles.product_flexGrow}>Headphones</p>
          <p className={styles.product_flexGrow}>$11.90</p>
          <div className={styles.quantity}>
            <button className={styles.quantity__button}>-</button>
            <input
              className={styles.quantity__input}
              type="number"
              value="1" />
            <button className={styles.quantity__button}>+</button>
            <button className={styles.quantity__edit}>
              <img
                className={styles.quantity__editImg}
                src={edit}
                alt="" />
            </button>
          </div>
        </li>
      </ul>
      <button className={styles.updateCart}>Update Shopping Cart</button>
    </div>
  );
}

export default ProductsWrapper;