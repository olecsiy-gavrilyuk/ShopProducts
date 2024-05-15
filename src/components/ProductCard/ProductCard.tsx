import { FC } from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import * as productAction from "../../redux/productSlice";

type Props = {
    product: Product;
}

export const ProductCard:FC<Props> = ({product}) => {
    const {id, name,count,weight} = product;
    const {width,height} = product.size;
    const dispatch = useAppDispatch();
    
    const handleDeleteProduct = (id: number) => {
        dispatch(productAction.deleteProduct(id))
    } 
    return (
        <div className={styles.card}>
            <p>{name}</p>
            <p>{count}</p>
            <p>{width}</p>
            <p>{height}</p>
            <p>{weight}</p>
            <button onClick={() => handleDeleteProduct(id)}>
                Delete
            </button>
        </div>
    )
}