import React from 'react';
import styles from './Summary.module.scss';

import Shipping from './Shipping/Shipping';
import CartTotals from './CartTotals/CartTotals';

const Summary = ({ subtotal }) => {

  const shippingValue = subtotal > 100 ? 0 : 23.80;
  const grandTotal = subtotal + shippingValue;

  return (
    <div className={styles.summary}>
      <button className={styles.summary__button}>Proceed to checkout</button>
      <Shipping shippingValue={shippingValue.toFixed(2)} />
      <CartTotals
        subtotal={subtotal.toFixed(2)}
        grandTotal={grandTotal.toFixed(2)}
      />
    </div>
  );
}

export default Summary;