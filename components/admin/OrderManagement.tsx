import React from 'react';

const OrderManagement: React.FC = () => {
  return (
    <div className="order-management">
      <h1>Manage Orders</h1>
      <button>Confirm Order</button>
      <button>Ship Order</button>
      <button>Cancel Order</button>
    </div>
  );
};

export default OrderManagement;
