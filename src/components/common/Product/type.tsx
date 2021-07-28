import { CartItemType } from '../../layout/Products/type';

export type productEventHandler = {
    eventHandler: (CartItem: CartItemType) => any;
    buttonName: string;
    id: number;
};

export interface ProductProps {
    CartItem: CartItemType;
    buttonHOC: (CartItem: CartItemType, productEventHandler: productEventHandler, key: number) => any;
    productEventHandlerArray: productEventHandler[];
}
