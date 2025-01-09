import { UserRole, UserStatus } from '../Enums';
import { PaymentMethod } from '../payment/payment_method';

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    status: UserStatus; 
    role: string;
    stripeAccountId?: string;
    bankAccountDetails?: string;
    address?: string; 
    phoneNumber?: string; 
    city?: string; 
    postalCode?: string; 
    booksForSaleOrRent?: string[]; 
    transactions: PaymentMethod[]; 
    paymentHistory?: PaymentResponse[];
}
