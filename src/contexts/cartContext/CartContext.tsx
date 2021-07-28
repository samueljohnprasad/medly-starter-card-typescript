import React, { createContext, useContext, useReducer } from 'react';
import { clearProducts, loadBasket, removeProduct, updateQuantity } from './actions/actions';
import { reducers } from './reducers/reducers';
import { CartContextType, InitialType, Props } from './type';
import { CartItemType } from '@components/layout/Products.tsx/type';
import { CartActionTypes } from './actions/type';

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: Props) => {
    const [cartItems, dispatch] = useReducer(reducers, {} as InitialType);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                dispatch,
                loadBasket,
                clearProducts,
                updateQuantity,
                removeProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
