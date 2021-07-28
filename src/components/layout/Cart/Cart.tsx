import { Button, Drawer } from '@medly-components/core';
import { useCart } from 'contexts/cartContext/CartContext';
import React, { useState } from 'react';
import Product from '../Product';
import { buttonHOC } from '../Products.tsx/ButtonHOC';
import { AddShoppingCartIcon } from '@medly-components/icons';

export const Cart: React.FC = () => {
    const [drawerState, setDrawerState] = useState(false);
    const { cartItems } = useCart();
    console.log('Cart');
    const handler = () => {
        setDrawerState(!drawerState);
    };

    const cart1 = () => {
        console.log('im in cart1');
    };
    const cart2 = () => {
        console.log('im in cart2');
    };
    return (
        <>
            <Button disabled={false} edges="square" size="M" type="button" variant="solid" onClick={handler}>
                <AddShoppingCartIcon size="S" />
            </Button>
            <Drawer open={drawerState} onClose={handler}>
                <Drawer.Header>Add Filters</Drawer.Header>
                <Drawer.Content>
                    {cartItems?.cartItems?.map(item => (
                        <Product
                            key={item.id}
                            CartItem={item}
                            buttonHOC={buttonHOC}
                            buttonName={'+'}
                            productEventHandlerArray={[
                                { eventHandler: cart1, buttonName: '+', id: 0 },
                                { eventHandler: cart2, buttonName: '-', id: 1 }
                            ]}
                        />
                    ))}
                </Drawer.Content>
                <Drawer.Footer>
                    <Button variant="flat" onClick={() => 's'}>
                        Clear All
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
