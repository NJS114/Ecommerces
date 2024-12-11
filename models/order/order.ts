import { OrderStatus } from '../Enums';
import { User } from '../user/user';

export interface Order {
    id: string;
    email: string;
    status: OrderStatus;
    createdAt: Date;
    updatedAt?: Date;
    shippedAt?: Date;
    user: User;
}
