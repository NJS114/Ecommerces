import { BasketItem } from '../cart/cart_basket-item';

export interface BaseOrder {
    userId: string;
    items: BasketItem[];
    totalPrice: number;
    calculateTotalPrice(): number;
}
