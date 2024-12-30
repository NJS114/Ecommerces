import React, { useState } from 'react';

const ShippingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="shipping-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zip"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
      <button type="submit">Continue to Payment</button>
    </form>
  );
};

export default ShippingForm;
