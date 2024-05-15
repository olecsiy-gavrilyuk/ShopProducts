import { FC } from 'react';
import { Product } from '../../types/Product';
import styles from './ProductCard.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import * as productAction from "../../redux/productSlice";
import { useNavigate } from 'react-router-dom';

type Props = {
    product: Product;
}

export const ProductCard:FC<Props> = ({product}) => {
    const {id, name,count,weight} = product;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleDeleteProduct = (id: string) => {
        dispatch(productAction.deleteProduct(id))
    } 
    return (
        <div className={styles.card}>
            <div onClick={() => {
            navigate(`/products/${id}`)
        }}
        className={styles.pointer}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{count}</p>
            <p>{weight}</p>
            </div>
            
            <button onClick={() => handleDeleteProduct(id)}>
                Delete
            </button>
        </div>
    )
}