import { Order } from '../order/order';
import { UserRole } from '../Enums';

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    roles: UserRole;
    role: string;
    stripeAccountId?: string;
    bankAccountDetails?: string;
    orders: Order[];
    transactions: PaymentRequest[];
    paymentHistory: PaymentResponse[];
}
