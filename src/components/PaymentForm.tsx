import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../config';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    
  
    const [error, setError] = useState<string | null>(null);
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      const cardElement = elements.getElement(CardElement);
  
      try {
        const { token } = await stripe.createToken(cardElement);
        // Handle the token (send it to your server or handle the payment)
        const response = await fetch(`${backendUrl}/data/charge`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: 1000, // Replace with your desired amount in cents
              token: token.id,
            }),
          });

          const data = await response.json();

      if (data.success) {
        // Payment succeeded, handle accordingly (e.g., show a success message)
        console.log('Payment succeeded!');
        navigate('/Admin');
      } else {
        // Payment failed, handle accordingly (e.g., show an error message)
        setError('Payment failed');
      }
    } catch (error) {
      console.error(error.message);
      setError('Payment failed');
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