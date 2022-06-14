import React from 'react';
import styles from './main.module.css'
import products from '../../assets/Array'
import Products from '../Products/Products';

const Main = () => {
    return (
        <div className={styles.container}>
            {products.map(product => {

                return (
                    <Products
                       key={product.id}
                       product={product}
                    /> 
                )
            })}
           
        </div>
    );
};

export default Main;