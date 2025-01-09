import { useEffect, useState } from 'react';
import { saveSessionLocally } from '@/api/auth/session';
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';
import { encryptPayload } from '@/utils/encryptUtils';

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const { error } = router.query;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: credentials.email, // Use credentials.email
        password: credentials.password, // Use credentials.password
        encryptedPayload: JSON.stringify(encryptPayload({
          Identifier: credentials.email,  // If 'email' is used for identifier
          Password: credentials.password,
        })),
      });
      if (result?.ok) {
        const session = await getSession();
        if (session) {
          saveSessionLocally(session);
          router.push('/');
        }
      } else {
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      console.error('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSignIn}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
