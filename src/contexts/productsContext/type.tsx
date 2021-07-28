import { InitialType } from '@utils/type';
import { Actions, ProductsActionTypes } from './actions/type';
import React from 'react';
export interface Props {
    children: React.ReactNode;
}
export enum Theme {
    Dark = 'Dark',
    Light = 'Light'
}

interface search {
    type: Actions.SEARCH_PRODUCT | Actions.SELECTION_PRODUCTS;
    name: string;
}

export type ProductContextType = {
    theme: Theme;
    searchedKeyword: string;
    dispatch: (action: ProductsActionTypes) => void;
    products: InitialType;
    loadBasket: () => void;
    searchProduct: (name: string) => search;
    selectionProducts: (name: string) => search;
    chipFilterProducts: (name: string) => any;
};
