import React from 'react';
import styles from './ProductQuantity.module.scss';

import editImage from '../../../../../assets/images/edit-img.png';

const ProductQuantity = ({ id, quantity, handleQuantityChange }) => {

  const handleQuantity = e => {
    handleQuantityChange(e);
  }

  return (
    <div className={styles.quantity}>
      <button
        className={styles.quantity__button}
        id={id}
        name="remove"
        onClick={handleQuantity}
      >
        -
        </button>
      <input
        className={styles.quantity__input}
        id={id}
        type="number"
        value={quantity}
        onChange={handleQuantity}
      />
      <button
        className={styles.quantity__button}
        id={id}
        name="add"
        onClick={handleQuantity}
      >
        +
        </button>
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