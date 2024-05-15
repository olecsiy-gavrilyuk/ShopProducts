import { Product } from '../types/Product';
import { client } from '../utils/fetchService';

export const getProducts = () => {
    return client.get<Product[]>('/products');
};

export const getProductById = (productId: string) => {
    return client.get<Product[]>(`/prodcuts/${productId}`);
};

export const addProduct = ( product: Product) => {
    return client.post<Product>('/products', product);
};

export const deleteProductById = (productId: string) => {
    return client.delete(`/products/${productId}`);
};

export const updateTodo = (productId: number, product: Partial<Product>) => {
    return client.patch<Product>(`/products/${productId}`, product);
};

