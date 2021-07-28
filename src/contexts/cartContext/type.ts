import { Actions, CartActionTypes } from './actions/type';
import React from 'react';
import { CartItemType } from '@components/layout/Products.tsx/type';

export interface InitialType {
    cartItems: CartItemType[];
}

export interface Props {
    children: React.ReactNode;
}

interface update {
    type: Actions.UPDATE_QUANTITY;
    cartItem: CartItemType;
}
export type CartContextType = {
    dispatch: (action: CartActionTypes) => void;
    cartItems: InitialType;
    loadBasket: () => void;
    clearProducts: () => void;
    updateQuantity: (cartItem: CartItemType) => update;
    removeProduct: (id: number) => any;
};
