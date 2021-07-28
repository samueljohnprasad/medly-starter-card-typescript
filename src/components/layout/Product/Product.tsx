import React from 'react';
import { Button, Card } from '@medly-components/core';
import { Text } from '@medly-components/core';
import { ProductProps } from './type';
import { useCart } from 'contexts/cartContext/CartContext';
export const Product: React.FC<ProductProps> = ({ CartItem, buttonHOC, buttonName, productEventHandlerArray }: ProductProps) => {
    const { name, id, image, price, category } = CartItem;
    console.log('Product ');
    return (
        <Card
            alignItems="center"
            display="flex"
            flex={1}
            flowDirection="vertical"
            fullHeight={false}
            fullWidth={false}
            minHeight=""
            minWidth=""
            separator={false}
            variant="solid"
            withoutPadding
            style={{ margin: 10 }}
            key={id}
        >
            <Card
                alignItems="center"
                display="flex"
                flex={1}
                flowDirection="vertical"
                fullHeight={false}
                fullWidth={false}
                separator={false}
                variant="flat"
                withoutPadding={false}
            >
                <img src={image} style={{ width: 100, height: 100 }} />
                <Text fullWidth={false} lineThrough={false} textAlign="initial" textColor="inherit" uppercase={false}>
                    {name}
                </Text>
            </Card>
            <Card
                alignItems="left"
                display="flex"
                flex={6}
                flowDirection="vertical"
                fullHeight={false}
                fullWidth={false}
                separator={false}
                variant="flat"
                withoutPadding={false}
            >
                <Text fullWidth={false} lineThrough={false} textAlign="initial" textColor="inherit" textVariant="h3" uppercase={false}>
                    ${price}
                </Text>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {productEventHandlerArray.map((event, index) => buttonHOC(buttonName, CartItem, event, index))}
                </div>
            </Card>
        </Card>
    );
};
