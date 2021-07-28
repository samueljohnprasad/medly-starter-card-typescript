import { InitialState } from '@utils/products';
import React, { createContext, useContext, useReducer } from 'react';
import { loadBasket, searchProduct, selectionProducts, chipFilterProducts } from './actions/actions';
import { reducers } from './reducers/reducers';
import { ProductContextType, Theme, Props } from './type';

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductsProvider = ({ children }: Props) => {
    const [products, dispatch] = useReducer(reducers, InitialState);
    console.log('state', products);
    return (
        <ProductContext.Provider
            value={{
                products,
                dispatch,
                theme: Theme.Dark,
                loadBasket,
                searchProduct,
                selectionProducts,
                chipFilterProducts,
                searchedKeyword: ''
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
