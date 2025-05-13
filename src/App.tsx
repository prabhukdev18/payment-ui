
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/PaymentForm';

const stripePromise = loadStripe('pk_test_51QArtIRuRJCNcVWeaOUQOkR0Umk7V6GCmfy2jf7Eopg2Tps0nlx6OUrRpUvtKVeuJ4ff1SANE1bxqQqtB4Uo6Ann00HXBc75qK'); // Replace with your Stripe publishable key

const App: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default App;