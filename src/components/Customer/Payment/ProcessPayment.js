import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';



const stripePromise = loadStripe('pk_test_51IeBNYCg8x03sdelBn544XlKoac4buFPB2lKLoOwERx3KWSYbLSMzYEMr8d7q354uD7nAlRn4xIGrqwZVVLK2ZTX00kdYDRYeg');

const ProcessPayment = ({handlePayment,paymentData}) =>  {
    return (
        <Elements stripe={stripePromise}>

           {/* <SimpleCardForm  handlePayment={handlePayment} /> */}
           <SplitCardForm  handlePayment={handlePayment} paymentData={paymentData}/>
        </Elements>
    );
};

export default ProcessPayment