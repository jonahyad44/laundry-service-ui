import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';



interface Product {
  id: number,
  title: string,
  price: number,
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  stripePromise: any;
}


export default function ShoppingCart({stripePromise}: ShoppingCartProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/PaymentForm");
}

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, []);

  const minimumOrderAmount = 25.00;




  const products: Product[] = [
    { id: 1, title: 'Pillow Case', price: 5.00},
    { id: 2, title: 'Twin Comforter/Quilt', price: 15.00},
    { id: 3, title: 'Queen Comforter', price: 20.00},
    { id: 4, title: 'King Comforter', price: 25.00},
    { id: 5, title: 'Ironing', price: 3.00},
    { id: 6, title: 'Same-day delivery', price: 4.99},
    { id: 7, title: 'Laundry bag', price: 1.99},
  ];

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);



    if (existingItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1}
          : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { product, quantity: 1}]);
    }
  }

  const removeFromCart = (product: Product) => {
    setCart(prevCart =>
      prevCart.filter(item => item.product.id !== product.id)
    );
  }

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };


    return (
        <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="Pick-up date & time" />
      </DemoContainer>
    </LocalizationProvider>

    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart</h3>
      <ul>
        {cart.map(item => (
          <li key={item.product.id}>
            {item.product.title} - ${item.product.price} x {item.quantity}{' '}
            <button onClick={() => removeFromCart(item.product)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <strong>Total: ${calculateTotal()}</strong>
        {calculateTotal() < minimumOrderAmount && (
        <p>Minimum order amount: ${minimumOrderAmount}</p>
      )}
      </div>
      <Elements stripe={stripePromise}>
        <Button
        onClick={handleNavigation}
        sx={{
          backgroundColor: '#68e620',
          color: 'black',
          textTransform: 'capitalize',
          typography: 'sm-14-medium',
      }}
      variant="contained"
      type="submit"
      disabled={calculateTotal() < minimumOrderAmount}
      >
        Proceed to payment
      </Button>
      </Elements>
    </div>
      </>


    )
   
}