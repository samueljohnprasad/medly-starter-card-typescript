import { CartItemType } from '@components/layout/Products.tsx/type';

export enum Actions {
    UPDATE_QUANTITY,
    REMOVE_PRODUCT,
    CLEAR_PRODUCTS,
    INITIAL_PRODUCTS
}

export interface InitialProductsAction {
    type: Actions.INITIAL_PRODUCTS;
}

export interface ClearProductsAction {
    type: Actions.CLEAR_PRODUCTS;
}

export interface UpdateQuantityAction {
    type: Actions.UPDATE_QUANTITY;
    cartItem: CartItemType;
}

export interface RemoveProductsAction {
    type: Actions.REMOVE_PRODUCT;
    id: number;
}
export type CartActionTypes = InitialProductsAction | ClearProductsAction | UpdateQuantityAction | RemoveProductsAction;
