import { Button, Drawer } from '@medly-components/core';
import { useCart } from 'contexts/cartContext/CartContext';
import React, { useState } from 'react';
import Product from '../Product';
import { buttonHOC } from '../../layout/Products/ButtonHOC';
import { AddShoppingCartIcon } from '@medly-components/icons';
import { CartItemType } from '../../layout/Products/type';

export const Cart: React.FC = () => {
    const [drawerState, setDrawerState] = useState(false);
    const { cartItems, removeProduct, dispatch, clearProducts, updateQuantity } = useCart();
    const handler = () => {
        setDrawerState(!drawerState);
    };

    const addHandler = (cartItem: CartItemType) => {
        dispatch(updateQuantity(cartItem));
    };
    const removeHandler = (cartItem: CartItemType) => {
        dispatch(removeProduct(cartItem.id));
    };
    const cartTotalPrice = () => {
        return cartItems?.cartItems?.reduce((acc, curr) => acc + curr.amount * curr.price, 0);
    };
    return (
        <>
            <Button disabled={false} edges="square" size="M" type="button" variant="solid" onClick={handler}>
                <AddShoppingCartIcon size="S" />
            </Button>
            <Drawer open={drawerState} onClose={handler}>
                <Drawer.Header> {`total $${cartTotalPrice()}`} </Drawer.Header>
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
