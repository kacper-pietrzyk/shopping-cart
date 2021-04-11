import React from 'react';
import styles from './ProductsList.module.scss';

import Product from './Product/Product';

const ProductsList = ({ productsList, productsQty, handleQuantityChange, calculateSubtotal, handleProductDelete }) => {

  const products = productsList.map((product, index) => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
      quantity={productsQty[index].quantity}
      handleQuantityChange={handleQuantityChange}
      calculateSubtotal={calculateSubtotal}
      handleProductDelete={handleProductDelete}
    />
  ))

  return (

    <ul className={styles.productsList}>
      <li className={styles.productsList__header}>
        <p className={styles.productsList__name}>Product Name</p>
        <p className={styles.productsList__price}>Unit Price</p>
        <p className={styles.productsList__qty}>Qty</p>
      </li>
      {products}
    </ul>
  );
}

export default ProductsList;