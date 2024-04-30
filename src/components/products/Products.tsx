import React, { FC, useEffect, useState } from 'react';
import {IProduct, Product} from "../product/Product";

interface IProps {

}

const Products: FC<IProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) =>
        {setProducts(products)});
    }, []);

    console.log(products)

    return (
        <div>
            {products.map((product:IProduct) => (<Product key={product.id} {...product}/>))}
        </div>
    );
};

export {Products};