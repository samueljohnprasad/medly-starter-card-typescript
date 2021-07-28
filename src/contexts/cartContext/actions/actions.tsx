import { Actions, ClearProductsAction, InitialProductsAction, RemoveProductsAction, UpdateQuantityAction } from './type';
import { CartItemType } from '@components/layout/Products/type';
export const loadBasket = (): InitialProductsAction => ({
    type: Actions.INITIAL_PRODUCTS
});

export const clearProducts = (): ClearProductsAction => ({
    type: Actions.CLEAR_PRODUCTS
});

export const updateQuantity = (cartItem: CartItemType): UpdateQuantityAction => ({
    type: Actions.UPDATE_QUANTITY,
    cartItem
});

export const removeProduct = (id: number): RemoveProductsAction => ({
    type: Actions.REMOVE_PRODUCT,
    id
});
