import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCardForm = ({handlePayment}) => {

    
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError,setPaymentError] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState('')

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    setPaymentError(error.message)
    setPaymentSuccess(null)
    } else {
        setPaymentError(null)
        setPaymentSuccess(paymentMethod.id)
        handlePayment(paymentMethod.id)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} >
        Pay and Order 
      </button>
    </form>
    {
        paymentError && <p className="text-danger"> {paymentError} </p>
    }
    {
        paymentSuccess && <p className="text-success"> payment successfull </p>
    }
    </div>
  );
};

export default SimpleCardForm;