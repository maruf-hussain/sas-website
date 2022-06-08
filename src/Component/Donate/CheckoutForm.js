import React from 'react';
import {CardElement,  useStripe, useElements} from '@stripe/react-stripe-js'
import './CheckoutForm.css'
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#07d93f',
              '::placeholder': {
                color: '#07afd9',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div> <img class='w-25 mt-5' src='https://www.paypalobjects.com/ppcp/appcenterDetailPages/virtual_terminal/US/image-1-20210115163526.png?intrinsicWidth=450&intrinsicHeight=534&width=320&imwidth=320' alt='img'></img></div>
   
      <button className='pay-butt' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form> 
        </div>
    );
};

export default CheckoutForm;