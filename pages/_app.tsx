// pages/_app.tsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '@/components/cart/context/CartContext';
import { Elements } from '@stripe/react-stripe-js'; // Importation de Stripe
import { loadStripe } from '@stripe/stripe-js'; // Fonction pour charger la clé publique Stripe
import 'react-toastify/dist/ReactToastify.css';
import store from '@/redux/store';
import Navbar from '@/components/layout/Header';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <Navbar/>
            <Component {...pageProps} />
            <ToastContainer />
          </Elements>
        </CartProvider>
      </SessionProvider>
    </Provider>
  );
}
