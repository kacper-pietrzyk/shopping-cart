import React from 'react';
import styles from './Shipping.module.scss';

const Shipping = ({ shippingValue }) => {

  return (
    <div className={styles.shipping}>
      <h2 className={styles.shipping__text}>Shipping</h2>
      <p>${shippingValue}</p>
    </div>
  );
}

export default Shipping;