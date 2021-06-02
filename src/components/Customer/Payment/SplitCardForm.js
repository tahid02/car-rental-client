import React, { useMemo , useState} from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
//   const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:'16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
    // [fontSize]
  );

  return options;
};

const SplitCardForm = ({handlePayment,paymentData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError,setPaymentError] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState('')

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if (error) {
      console.log('[error]', error);
    setPaymentError(error.message)
    setPaymentSuccess(null)
    } else {
        setPaymentError(null)
        setPaymentSuccess(paymentMethod.id)
        handlePayment(paymentMethod.id)
      console.log('[this is user PaymentMethod]', paymentMethod);
    }
    // console.log("[PaymentMethod]", payload);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p className="text-danger"> {paymentError} </p>
    }
    {
        paymentSuccess && paymentData && <p className="text-success"> payment successfull </p>
    }
    </>
  );
};

export default SplitCardForm;
