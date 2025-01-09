import { Basket } from './basket';

export interface BasketItem {
    productId: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    totalPrice: number;
    imageUrl?: string;
    status: BasketItemStatus;
    attributes?: ProductAttributes;
}

export enum BasketItemStatus {
    InCart = 0,
    Reserved = 1,
    OutOfStock = 2,
    Purchased = 3,
    Added = 4
}

export interface ProductAttributes {
    size: string;
    color: string;
}
