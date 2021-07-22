import React from 'react';
//comp
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { useState } from 'react';
import { useQuery } from 'react-query';
import AddShoppingCartIcon from '@medly-components/icons';
//styles
import { Wrapper, StyledButton } from './app.styles';
import { isTemplateSpan } from 'typescript';
import Card from '../../components/layout/Card/Card';
//types
export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};
const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch('https://fakestoreapi.com/products')).json();
};
function App() {
    console.log('dataa');
    const [state, setState] = useState([] as CartItemType[]);
    const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
    console.log('data', data);
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <div>Sometime went wrong...</div>;
    return (
        <Wrapper>
            {' '}
            <Card sam={data} />{' '}
        </Wrapper>
    );
}

export default App;
