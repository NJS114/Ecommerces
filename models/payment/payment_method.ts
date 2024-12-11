export interface PaymentMethod {
    type: string;
    card: Card | null;
}

export interface Card {
    number: string;
    expMonth: string;
    expYear: string;
    cvc: string;
    name: string;
    billingAddress: BillingAddress;
}

export interface BillingAddress {
    city: string;
    country: string;
    line1: string;
    line2?: string;
    postalCode: string;
    state: string;
    stripeResponse: StripeResponse;
}

export interface StripeResponse {
    headers: Header[];
    content: string;
}

export interface Header {
    key: string;
    value: string[];
}
