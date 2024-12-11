import { BasketItemStatus } from '../Enums';
import { Basket } from './basket';

export interface BasketItem {
    productId: string;
    quantity: number;
    price: number;
    status: BasketItemStatus;
    basket: Basket | null; 
}
