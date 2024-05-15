import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import {
    getProducts,
    addProduct,
    deleteProductById
} from "../utils/apiProducts";

export const getAllProducts = createAsyncThunk(
    'products',
    () => {
        return getProducts();
    }
)


export const createProduct = createAsyncThunk(
    "createProduct",
    async (newProduct: Product) => {
        const response = addProduct(newProduct)
        return response;
    }
)

export const deleteProduct = createAsyncThunk(
    'deleteProduct',
    async (productId: number) => {
        await deleteProductById(productId);

        return productId;
    }
)

export interface ProductState  {
    products: Product[];
    loading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: '',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(getAllProducts.rejected, (state) => {
                state.loading = false;
                state.error = 'Error';
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(product => product.id !== action.payload)
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.loading = false;
                state.error = 'error';
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = [...state.products, action.payload]
            })
            .addCase(createProduct.rejected, (state) => {
                state.loading = false;
                state.error = 'error';
            });
    },
})

export default productsSlice.reducer;