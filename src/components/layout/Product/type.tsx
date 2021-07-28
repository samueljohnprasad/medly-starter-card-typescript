import { CartItemType } from '../Products.tsx/type';
import React from 'react';

export type productEventHandler = {
    eventHandler: (CartItem: CartItemType) => any;
    buttonName: string;
};

export interface ProductProps {
    CartItem: CartItemType;
    buttonHOC: (buttonName: string, CartItem: CartItemType, productEventHandler: productEventHandler, key: number) => any;
    buttonName: string;
    productEventHandlerArray: productEventHandler[];
}
