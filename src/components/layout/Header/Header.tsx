import { Avatar, Text, SearchBox } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import { useProducts } from 'contexts/productsContext/productsContext';
import React from 'react';
import Cart from '../Cart';
import ChipSelection from '../ChipSelection';
import * as Styled from './Header.styled';

export const Header: React.FC & WithStyle = () => {
    const { dispatch, searchProduct } = useProducts();
    return (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Groceries
                </Text>
            </Styled.LeftSide>
            <Styled.RightSide>
                <SearchBox
                    options={[]}
                    placeholder="Search"
                    size="M"
                    onInputChange={(e: string) => dispatch(searchProduct(e))}
                    onClear={() => dispatch(searchProduct(''))}
                />
                <ChipSelection />
                <Cart />
            </Styled.RightSide>
        </Styled.Header>
    );
};

Header.displayName = 'Header';
Header.Style = Styled.Header;

export default Header;
