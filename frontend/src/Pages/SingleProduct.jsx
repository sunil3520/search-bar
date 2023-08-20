import React from "react";

import styles from "./SingleProduct.module.css";

const SingleProduct = ({ image, title, price }) => {
  return (
    <div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default SingleProduct;
