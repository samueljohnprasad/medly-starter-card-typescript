import { CartItemType } from '@components/layout/Products.tsx/type';
import { Actions, CartActionTypes } from '../actions/type';
import { InitialType } from '../type';
const initialState: InitialType = {
    cartItems: []
};
let newState: CartItemType[] = [];
export const reducers = (state: InitialType = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case Actions.UPDATE_QUANTITY:
            if (state.cartItems) {
                const isItemInCart = state.cartItems.find(item => item.id === action.cartItem.id);

                if (isItemInCart) {
                    newState = state.cartItems.map(item => (item.id === action.cartItem.id ? { ...item, amount: item.amount + 1 } : item));
                } else {
                    newState = [...state.cartItems, action.cartItem];
                }
                // newState = [...state.cartItems, action.cartItem];
            } else {
                newState = [{ ...action.cartItem }];
            }

            return {
                cartItems: [...newState]
            };

        case Actions.REMOVE_PRODUCT:
            newState = state.cartItems.filter(cartIem => cartIem.id !== action.id);
            return {
                cartItems: [...newState]
            };

        case Actions.CLEAR_PRODUCTS:
            return {
                cartItems: []
            };

        default:
            return state;
    }
};
