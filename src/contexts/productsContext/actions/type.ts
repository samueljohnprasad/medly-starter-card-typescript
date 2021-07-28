export enum Actions {
    INITIAL_PRODUCTS,
    SEARCH_PRODUCT,
    SELECTION_PRODUCTS,
    CHIP_FILTER
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
export interface ChipFilterProducts {
    type: Actions.CHIP_FILTER;
    name: string;
}
export type ProductsActionTypes = LoadBasketAction | SearchProduct | SelectionProducts | ChipFilterProducts;
