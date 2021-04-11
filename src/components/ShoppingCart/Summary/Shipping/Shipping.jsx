import React from 'react';
import styles from './Shipping.module.scss';

const Shipping = () => {

  return (
    <div className={styles.shipping}>
      <h2 className={styles.shipping__text}>Shipping</h2>
      <p>$23.80</p>
    </div>
  );
}

export default Shipping;