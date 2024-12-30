import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="payment-form">
      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="expiryDate"
        placeholder="Expiry Date"
        value={paymentInfo.expiryDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cvv"
        placeholder="CVV"
        value={paymentInfo.cvv}
        onChange={handleChange}
      />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
