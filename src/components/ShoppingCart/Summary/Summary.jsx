import React from 'react';
import styles from './Summary.module.scss';

import Shipping from './Shipping/Shipping';
import CartTotals from './CartTotals/CartTotals';

const Summary = () => {

  return (
    <div className={styles.summary}>
      <button className={styles.summary__button}>Proceed to checkout</button>
      <Shipping />
      <CartTotals />
    </div>
  );
}

export default Summary;