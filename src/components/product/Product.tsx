import React, {FC} from 'react';

import styles from "./Product.module.css"


export interface IProduct{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [string]
}


export type  IRecipeTypeProps = IProduct & {children?:React.ReactNode}


const Product: FC<IRecipeTypeProps> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div className={styles.product}>
            <img src={thumbnail} alt={title} />

            <h3>{title}</h3>

            <p>{description}</p>

            <p>Price: ${price}</p>

            {discountPercentage > 0 && (
                <p>Discount: {discountPercentage}%</p>
            )}

            <p>Rating: {rating}/5</p>

            <p>Stock: {stock}</p>

            <p>Brand: {brand}</p>

            <p>Category: {category}</p>

            {images.length > 0 && (
                <div className={styles.productImages}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            )}
        </div>
    );
};

export {Product};