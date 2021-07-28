import React, { useState } from 'react';
import Product from '../Product';
import { WithStyle } from '@medly-components/utils';
import { useProducts } from '../../../contexts/productsContext/productsContext';
import { CartItemType } from './type';
import Selections from '@components/layout/OptionSelection';
import { useCart } from 'contexts/cartContext/CartContext';
import { buttonHOC } from './ButtonHOC';

export const Products: React.FC & WithStyle = () => {
    const { dispatch, updateQuantity } = useCart();
    //const { state, setState } = useState();
    const store = useProducts();
    const {
        products: { products, chipCategories }
    } = store;
    console.log('storeeee in Products', chipCategories);
    const searchedKeyword = store.products.searchedKeyword;
    // const chips = products.products.filter((item) =>{
    //     return arr.inclues(item.category) || !arr[0];
    // })
    const filteredProducts = products
        .filter(product => {
            return chipCategories.includes(product.category) || !chipCategories[0];
        })
        .filter(item => item.name.toLowerCase().includes(searchedKeyword.toLowerCase()) || !searchedKeyword);
    console.log('Products');
    const AddToCartHandler = (obj: any) => {
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
                        productEventHandlerArray={[{ eventHandler: AddToCartHandler, buttonName: 'ADD TO CART', id: 0 }]}
                    />
                ))}
            </header>
        </div>
    );
};
