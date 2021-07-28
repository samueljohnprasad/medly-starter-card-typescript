import React from 'react';
import Product from '../Product';
import { WithStyle } from '@medly-components/utils';
import { useProducts } from '../../../contexts/productsContext/productsContext';
import { CartItemType } from './type';
import Selections from '@components/layout/OptionSelection';
import Cart from '../Cart';
import { Button, Chip } from '@medly-components/core';
import { CartProvider, useCart } from 'contexts/cartContext/CartContext';
import { useState } from 'react';
import { buttonHOC } from './ButtonHOC';

export const Products: React.FC & WithStyle = () => {
    const { dispatch, updateQuantity } = useCart();
    const state = useProducts();
    const { products } = state;
    const searchedKeyword = state.products.searchedKeyword;
    const filteredProducts = products.products.filter(item => item.name.toLowerCase().includes(searchedKeyword.toLowerCase()));
    console.log('Products');
    const AddToCartHandler = (obj: any) => {
        console.log('AddToCartHandler');
        dispatch(updateQuantity(obj));
    };
    const removeToCartHandler = (obj: any) => {
        console.log('removeToCartHandler');
        dispatch(updateQuantity(obj));
    };
    return (
        <div>
            <Selections></Selections>
            <header className="App-header">
                {filteredProducts?.map((product: CartItemType) => (
                    <Product
                        key={product.id}
                        CartItem={product}
                        buttonHOC={buttonHOC}
                        buttonName={'ADD TO CART'}
                        productEventHandlerArray={[{ eventHandler: AddToCartHandler, buttonName: 'ADD TO CARTT', id: 0 }]}
                    />
                ))}
            </header>
        </div>
    );
};
