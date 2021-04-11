import React, { useState } from 'react';
import styles from './Summary.module.scss';

import Shipping from './Shipping/Shipping';
import CartTotals from './CartTotals/CartTotals';

const Summary = ({ subtotal }) => {

  const [submit, setSubmit] = useState(false);

  const shippingValue = subtotal > 100 ? 0 : 23.80;
  const grandTotal = subtotal + shippingValue;

  const handleSubmit = () => {
    setSubmit(true);
  }

  const submitInfo = (
    <div className={styles.summary__darkBackground}>
      <div className={styles.summary__approval}>
        <h2 className={styles.summary__info}>Your order has been submitted successfully</h2>
        <button className={styles.summary__buttonBack}>Back to shop</button>
      </div>
    </div>
  )

  return (
    <div className={styles.summary}>
      <button
        className={styles.summary__button}
        onClick={handleSubmit}
      >
        Proceed to checkout
        </button>
      <Shipping shippingValue={shippingValue.toFixed(2)} />
      <CartTotals
        subtotal={subtotal.toFixed(2)}
        grandTotal={grandTotal.toFixed(2)}
        handleSubmit={handleSubmit}
      />
      {submit ? submitInfo : null}
    </div>
  );
}

export default Summary;