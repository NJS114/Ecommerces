import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className="forgot-password">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
