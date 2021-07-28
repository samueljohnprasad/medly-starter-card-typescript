export enum Actions {
    INITIAL_PRODUCTS,
    SEARCH_PRODUCT,
    SELECTION_PRODUCTS
}

export interface LoadBasketAction {
    type: Actions.INITIAL_PRODUCTS;
}

export interface SearchProduct {
    type: Actions.SEARCH_PRODUCT;
    name: string;
}
export interface SelectionProducts {
    type: Actions.SELECTION_PRODUCTS;
    name: string;
}
export type ProductsActionTypes = LoadBasketAction | SearchProduct | SelectionProducts;
