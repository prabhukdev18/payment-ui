import React, { useState } from 'react';
import { PaymentElement,  useStripe } from '@stripe/react-stripe-js';

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  // const elements = useElements();
  const [cardholderName, setCardholderName] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!stripe || !elements) return;

  //   const result = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       payment_method_data: {
  //         billing_details: {
  //           name: cardholderName,
  //           address: {
  //             country: country,
  //             postal_code: postalCode,
  //           },
  //         },
  //       },
  //     },
  //   });

  //   if (result.error) {
  //     console.error(result.error.message);
  //   } else {
  //     console.log('Payment successful:', result.paymentIntent);
  //   }
  // };

  return (
    <div className="relative">
      <form
        // onSubmit={handleSubmit}
        className="space-y-4 w-96 p-6 rounded-xl shadow-md border"
      >
        <label className="text-sm font-semibold">Cardholder Name</label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          placeholder="John Doe"
          className="p-3 border rounded-md w-full"
          required
        />

        <label className="text-sm font-semibold">Country/Region</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-3 border rounded-md w-full"
          required
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          <option value="AU">Australia</option>
          {/* Add more countries as needed */}
        </select>

        <label className="text-sm font-semibold">Postal Code</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="12345"
          className="p-3 border rounded-md w-full"
          required
        />

        <label className="text-sm font-semibold">Payment Details</label>
        <PaymentElement className="p-3 border rounded-md" />

        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-600 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Pay
        </button>
      </form>

      {/* Autofill Button at the Bottom */}
      <button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
        onClick={() => {
          setCardholderName('John Doe');
          setCountry('US');
          setPostalCode('12345');
        }}
      >
        Autofill
      </button>
    </div>
  );
};

export default PaymentForm;