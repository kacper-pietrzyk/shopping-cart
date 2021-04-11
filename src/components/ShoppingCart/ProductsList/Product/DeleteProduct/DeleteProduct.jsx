import React from 'react';
import styles from './DeleteProduct.module.scss';

import deleteImage from '../../../../../assets/images/x-img.png';

const DeleteProduct = () => {

  return (
    <button className={styles.delete}>
      <img
        className={styles.delete__image}
        src={deleteImage}
        alt="delete" />
    </button>
  );
}

export default DeleteProduct;