import { CartItemType } from '@components/layout/Products/type';
export interface InitialType {
    products: CartItemType[];
    searchedKeyword: string;
    chipCategories: string[];
}
