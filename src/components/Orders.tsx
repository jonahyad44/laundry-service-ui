import { useState, useEffect } from 'react';
import { backendUrl } from '../config';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await fetch(`${backendUrl}/api/orders`);
            const data = await response.json();
            setOrders(data);
          } catch (error) {
            console.error('Error fetching orders:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchOrders();
      }, []); // Empty dependency array ensures the effect runs only once on mount
    
      if (loading) {
        return <p>Loading orders...</p>;
      }
    

    return(
        <>
        <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Total: ${order.amount / 100} {/* assuming amount is in cents */}
            </li>
          ))}
        </ul>
      )}
    </div>
        </>
    )
}
    