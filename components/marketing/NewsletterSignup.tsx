import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className="newsletter-signup">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterSignup;
