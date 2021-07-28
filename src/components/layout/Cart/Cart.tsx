import { Button, Drawer } from '@medly-components/core';
import { useCart } from 'contexts/cartContext/CartContext';
import React, { useState } from 'react';
import Product from '../Product';
import { buttonHOC } from '../Products.tsx/ButtonHOC';
import { AddShoppingCartIcon } from '@medly-components/icons';
import { CartItemType } from '../Products.tsx/type';

export const Cart: React.FC = () => {
    const [drawerState, setDrawerState] = useState(false);
    const { cartItems, removeProduct, dispatch, clearProducts, updateQuantity } = useCart();
    console.log('Cart');
    const handler = () => {
        setDrawerState(!drawerState);
    };

    const addHandler = (cartItem: CartItemType) => {
        dispatch(updateQuantity(cartItem));
        console.log('im in cart1');
    };
    const removeHandler = (cartItem: CartItemType) => {
        dispatch(removeProduct(cartItem.id));
        console.log('im in cart2');
    };
    const cartTotalPrice = () => {
        console.log('cartTotalPrice');

        return cartItems?.cartItems?.reduce((acc, curr) => acc + curr.price, 0);
    };
    return (
        <>
            <Button disabled={false} edges="square" size="M" type="button" variant="solid" onClick={handler}>
                <AddShoppingCartIcon size="S" />
            </Button>
            <Drawer open={drawerState} onClose={handler}>
                <Drawer.Header>Cart Total Price {cartTotalPrice()} </Drawer.Header>
                <Drawer.Content>
                    {cartItems?.cartItems?.map(item => (
                        <Product
                            key={item.id}
                            CartItem={item}
                            buttonHOC={buttonHOC}
                            productEventHandlerArray={[
                                { eventHandler: addHandler, buttonName: '+', id: 0 },
                                { eventHandler: removeHandler, buttonName: 'X', id: 1 }
                            ]}
                        />
                    ))}
                </Drawer.Content>
                <Drawer.Footer>
                    <Button variant="flat" onClick={() => dispatch(clearProducts())}>
                        Clear All
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
