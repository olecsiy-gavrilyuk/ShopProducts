import { FC,  useState } from "react";
import { ProductCard } from "../ProductCard";
import styles from "./ProductList.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as productAction from "../../redux/productSlice";
import { v4 as uuidv4 } from 'uuid';
import { Product } from "../../types/Product";




export const ProductList: FC = () => {
    const [openInputs,setOpenInputs] = useState(false);
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products)
    

    const [formData, setFormData] = useState<Product>({
      id: uuidv4(),
      imageUrl: 'empty',
      name: '',
      count: '',
      size: {
        width: 100,
        height: 100
      },
      weight: '',
      comments: [],
    });
    const handleOpenInputs = () => {
      setOpenInputs(!openInputs)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(productAction.createProduct(formData));
      setOpenInputs(!openInputs)
    }

  return (
    <div >
        <div className={styles.list}>
        {products && products.map(product => (
        <div className={styles.grid_item} key={product.id}>
            <ProductCard  product={product}/>
        </div> 
      ))}
        </div>
      
      <button 
        onClick={() => handleOpenInputs()}
        disabled={openInputs}>
        add product
      </button>

        {openInputs && (
          <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" />
          <input type="text" name="count" value={formData.count} onChange={handleChange} placeholder="count" />
          <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="weight" />
          <button type="submit">Submit</button>
        </form>
        )}
      <div>

      </div>
    </div>
  );
};




