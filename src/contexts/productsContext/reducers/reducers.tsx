import { InitialType } from '@utils/type';
import { Actions, ProductsActionTypes } from '../actions/type';
export const reducers = (state: InitialType, action: ProductsActionTypes) => {
    switch (action.type) {
        case Actions.INITIAL_PRODUCTS:
            return {
                ...state
            };
        case Actions.SEARCH_PRODUCT:
            console.log('reducer state', state);
            return {
                ...state,
                searchedKeyword: action.name
            };
        case Actions.SELECTION_PRODUCTS:
            if (action.name === '1') {
                state.products.sort((productA, productB) => productB.price - productA.price);
            } else if (action.name == '2') {
                state.products.sort((productA, productB) => productA.price - productB.price);
            }

            return {
                ...state
            };

        default:
            return state;
    }
};
