import { FC, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as productAction from "../../redux/productSlice";



export const ProductList: FC = () => {
    const products = useAppSelector((state) => state.products.products)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(productAction.getAllProducts());
    }, []);

  return (
    <div >
        <div className={styles.list}>
        {products && products.map(product => (
        <div className={styles.grid_item} key={product.id}>
            <ProductCard  product={product}/>
        </div> 
      ))}
        </div>
      
      <button>
        add product
        </button>
    </div>
  );
};




