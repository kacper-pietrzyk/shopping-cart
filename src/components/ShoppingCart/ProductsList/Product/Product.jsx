import React from 'react';
import styles from './Product.module.scss';

import headphones from '../../../../assets/images/headphones.png';
import editImage from '../../../../assets/images/edit-img.png';
import deleteImage from '../../../../assets/images/x-img.png';

const Product = () => {

  return (
    <li className={styles.productsList__product}>
      <button className={styles.product__delete}>
        <img className={styles.product__deleteImg} src={deleteImage} alt="delete" />
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
        // value="1" 
        />
        <button className={styles.quantity__button}>+</button>
        <button className={styles.quantity__edit}>
          <img
            className={styles.quantity__editImg}
            src={editImage}
            alt="edit quantity" />
        </button>
      </div>
    </li>
  );
}

export default Product;