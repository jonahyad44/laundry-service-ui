import { useEffect, useState } from 'react';

interface Order {
  id: string;
  amount: string;
}


export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders"); 
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };


    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }
  

  return (
    <>
   <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Total: ${order.amount} 
            </li>
          ))}
        </ul>
      )}
    </div>

    </>
  )
}