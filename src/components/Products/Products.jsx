import React from 'react';
import styles from '../Main/main.module.css'

const Products = (props) => {
    return (
        <div className={styles.productCard}>
            <img className={styles.img} src={props.product.image} alt={props.product.name}></img>
            <div className={styles.cardText}>
                <p className={styles.price}>{props.product.price}</p>
                <p className={styles.name}>{props.product.name}</p>
                <p className={styles.left}>Left:{props.product.left}</p>
            </div>
            
        </div>
    );
};

export default Products;