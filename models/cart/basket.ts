import { User } from '../user/user';
import { BaseOrder } from './cart_base';

export interface Basket extends BaseOrder {
    createdAt: Date;
    user: User | null; // Virtual reference
}
