import React from 'react';
import styles from './ProductQuantity.module.scss';

import editImage from '../../../../../assets/images/edit-img.png';

const ProductQuantity = () => {

  return (
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
  );
}

export default ProductQuantity;