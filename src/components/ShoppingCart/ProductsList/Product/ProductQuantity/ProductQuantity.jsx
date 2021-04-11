import React from 'react';
import styles from './ProductQuantity.module.scss';

import editImage from '../../../../../assets/images/edit-img.png';

const ProductQuantity = ({ id, quantity, handleButtonQuantity }) => {

  // const handleInputChange = e => {
  //   if (e.target.value >= 0) {
  //     setQty(e.target);
  //   } else {
  //     setQty(0)
  //   }
  // }

  const handleButtonClick = e => {
    handleButtonQuantity(e);
  }

  return (
    <div className={styles.quantity}>
      <button
        className={styles.quantity__button}
        id={id}
        name="remove"
        onClick={handleButtonClick}
      >
        -
        </button>
      <input
        className={styles.quantity__input}
        type="number"
        value={quantity}
      // onChange={handleInputChange}
      />
      <button
        className={styles.quantity__button}
        id={id}
        name="add"
        onClick={handleButtonClick}
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