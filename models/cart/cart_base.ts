import { BasketItem } from './cart_item';

export interface BaseOrder {
    userId: string;
    items: BasketItem[];
    totalPrice: number;
    calculateTotalPrice(): number;
}
