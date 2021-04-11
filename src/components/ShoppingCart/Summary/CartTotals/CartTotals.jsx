import React from 'react';
import styles from './CartTotals.module.scss';

const CartTotals = ({ subtotal, grandTotal, handleSubmit }) => {

  return (
    <div className={styles.cartTotals}>
      <h2 className={styles.cartTotals__header}>Cart totals</h2>
      <div className={styles.cartTotals__subtotal}>
        <h3 className={styles.cartTotals__subtotalText}>Subtotal</h3>
        <p>${subtotal}</p>
      </div>
      <div className={styles.cartTotals__grandTotal}>
        <h3 className={styles.cartTotals__grandTotalText}>Grand Total</h3>
        <p>${grandTotal}</p>
      </div>
      <button
        className={styles.cartTotals__button}
        onClick={handleSubmit}
        disabled={Number(subtotal) === 0 ? true : false}
      >
        Proceed to checkout
        </button>
    </div>
  );
}

export default CartTotals;