import { Currency } from '../Enums';

export interface PaymentRequest {
    userId: string;
    amount: number;
    currency: Currency;
    paymentMethodId: string;
    description: string;
    token: string;
}
