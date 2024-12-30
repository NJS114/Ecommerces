import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="register-form">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newUser.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={newUser.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={newUser.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
