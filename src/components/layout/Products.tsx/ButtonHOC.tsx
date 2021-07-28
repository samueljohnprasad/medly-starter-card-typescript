import { Button, Text } from '@medly-components/core';
import React from 'react';
import { CartItemType } from './type';
import { productEventHandler } from '../Product/type';

export const buttonHOC = (CartItem: CartItemType, productEventHandler: productEventHandler, key: number) => {
    return (
        <Button key={key} size="XS" onClick={() => productEventHandler.eventHandler(CartItem)}>
            <Text>{productEventHandler.buttonName}</Text>
        </Button>
    );
};
