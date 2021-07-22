import { Button } from '@medly-components/core';
import React from 'react';
//types
import { CartItemType } from '../App';

//styles
import { Wrapper } from './cartitem.styles';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>Price : ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>

            <div className="buttons">
                <Button onClick={() => removeFromCart(item.id)}>-</Button>
                <p>{item.amount}</p>
                <Button onClick={() => addToCart(item)}>+</Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);
export default CartItem;
