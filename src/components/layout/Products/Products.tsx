import React from 'react';
import Product from '../../common/Product';
import { WithStyle } from '@medly-components/utils';
import { useProducts } from '../../../contexts/productsContext/productsContext';
import { CartItemType } from './type';
import Selections from '@components/common/OptionSelection';
import { useCart } from 'contexts/cartContext/CartContext';
import { buttonHOC } from './ButtonHOC';

export const Products: React.FC & WithStyle = () => {
    const { dispatch, updateQuantity } = useCart();
    const store = useProducts();
    const {
        products: { products, chipCategories }
    } = store;
    const searchedKeyword = store.products.searchedKeyword;
    const filteredProducts = products
        .filter(product => {
            return chipCategories.includes(product.category) || !chipCategories[0];
        })
        .filter(item => item.name.toLowerCase().includes(searchedKeyword.toLowerCase()) || !searchedKeyword);
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
