import React from 'react';

const UserOrders: React.FC = () => {
  return (
    <div className="user-orders">
      <h2>Your Orders</h2>
      <p>Order #123 - Status: Shipped</p>
      <p>Order #124 - Status: Pending</p>
    </div>
  );
};

export default UserOrders;
