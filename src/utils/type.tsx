import { CartItemType } from '@components/layout/Products.tsx/type';
export interface InitialType {
    products: CartItemType[];
    searchedKeyword: string;
    chipCategories: string[];
}
