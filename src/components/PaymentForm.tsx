import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create PaymentMethod
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!, // Assuming CardElement is properly set up
      });

      if (error) {
        // Handle error, e.g., display error message to the user
        setError(error.message || 'An error occurred while processing your payment.');
      } else {
        // Payment method created successfully
        console.log('Payment succeeded:', paymentMethod);
        navigate("/Admin");
        // Handle the successful payment method creation, e.g., send to server
      }
    } catch (error) {
      // Handle other errors that may occur during the API request
      console.error('Error confirming PaymentIntent:', error);
      setError('An error occurred while processing your payment.');
    }

    
          
}

    return(
        <>
        <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button
      sx={{
        backgroundColor: '#b260ee',
        color: 'black',
        textTransform: 'none',
        typography: 'sm-14-medium',
    }}
    variant="contained"
    type="submit"
    disabled={!stripe}>
        Pay
    </Button>
    </form>
        
        
        </>
    )
}