import { Actions, LoadBasketAction, SearchProduct, SelectionProducts } from './type';

export const loadBasket = (): LoadBasketAction => ({
    type: Actions.INITIAL_PRODUCTS
});

export const searchProduct = (name: string): SearchProduct => ({
    type: Actions.SEARCH_PRODUCT,
    name
});

export const selectionProducts = (name: string): SelectionProducts => ({
    type: Actions.SELECTION_PRODUCTS,
    name
});
