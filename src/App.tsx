import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import OrderForm from './components/OrderForm';
import AboutUs from './components/AboutUs';
import Admin from './pages/Admin';
import "./themes/fonts.css";
import ShoppingCart from './components/ShoppingCart';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './components/PaymentForm';
import Orders from './components/Orders';



function App() {
  const stripePromise = loadStripe('pk_test_51ODvYwDEtVoGXwUaKaMxpX3nCuhiEYT2okld7kiSNW9voBlxiogqpABysAvQGOlORbfFy6UgY6B6r3kD2P4l7Tdk00lPop2lZ9');


  return (
    <Elements stripe={stripePromise}>
    <BrowserRouter>
    <Routes>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/OrderForm' element={<OrderForm/>}/>
      <Route path='/Orders' element={<Orders/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/' element={<Admin/>}/>
      <Route path='/ShoppingCart' element={<ShoppingCart stripePromise={stripePromise}/>}/>
      <Route path='/PaymentForm' element={<PaymentForm/>}/>
    </Routes>
    </BrowserRouter>
    </Elements>
  );
}

export default App;
