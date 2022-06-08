import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js'
import './Payment.css'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const Payment = () => {
    return (
        <div class='container mt-5'>
            <div className='pament-m'>
                <div>
<img className='image-pay' src='https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?t=st=1654663737~exp=1654664337~hmac=6636bb893c220558a8ae331e834a105ef9cf13484388aa980a0ad02e431fc89b&w=740' alt='img'></img>
                </div>
                <div className='pay-main'>
            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
            
            </div>
            </div>
         
        </div>
    );
};

export default Payment;