import React from 'react';

type OrderSummaryProps = {
  items: { name: string; price: number }[];
  total: number;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.price} €</li>
        ))}
      </ul>
      <p>Total: {total} €</p>
    </div>
  );
};

export default OrderSummary;
