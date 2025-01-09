export interface PaymentMethod {
    id: string;
    type: string; // Type de paiement, par exemple "card", "bank_transfer", etc.
    card?: Card; // Informations spécifiques à la carte (null si ce n'est pas une carte)
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
    stripeResponse: StripeResponse;
    city: string;
    country: string;
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
}

export interface StripeResponse {
    headers: Header[];
    content: string;
}

export interface Header {
    key: string;
    value: string[];
}
