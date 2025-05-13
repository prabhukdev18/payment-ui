import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './components/PaymentForm';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your Stripe publishable key

const App: React.FC = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Call the Lambda function to get the clientSecret
    fetch('https://<your-lambda-function-url>', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }), // Example amount and currency
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching clientSecret:', error));
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;


// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './components/PaymentForm';

// const stripePromise = loadStripe('pk_test_51QArtIRuRJCNcVWeaOUQOkR0Umk7V6GCmfy2jf7Eopg2Tps0nlx6OUrRpUvtKVeuJ4ff1SANE1bxqQqtB4Uo6Ann00HXBc75qK'); // Replace with your Stripe publishable key

// const App: React.FC = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>
//   );
// };

// export default App;