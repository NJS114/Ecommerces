import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import "@/styles/Checkout.module.css";
import { PaymentService } from '@/api/api_payment';
import { PaymentRequest } from '@/models/payment/payment_request';
import { Currency } from '@/models/Enums';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  
  // Assurer que cardElement est créé par Stripe
  const cardElement = elements?.getElement(CardElement);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!stripe || !elements || !cardElement) {
      return;
    }

    const paymentMethod = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    const paymentRequest: PaymentRequest = {
      userId: '12345',
      amount: 100,
      currency: Currency.EUR,
      paymentMethodId: "pm_card_visa",
      description: 'Achat d\'articles',
      token: "tok_visa",
    };
    
    const paymentResponse = await PaymentService.makePayment(paymentRequest);
    const { clientSecret: newClientSecret } = paymentResponse.data;  // Renommage pour éviter conflit avec la prop

    const result = await stripe.confirmPayment(newClientSecret);

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log('Paiement réussi');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Payer</button>
    </form>
  );
};

export default CheckoutForm;
