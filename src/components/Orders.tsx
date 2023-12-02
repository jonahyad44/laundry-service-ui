import { useEffect, useState } from 'react';
import axios from 'axios';

interface Order {
  id: string;
  amount: number;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get<Order[]>("/api/orders");
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  
  return (
    <>
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.amount}</li>
        ))}
      </ul>
    </div>

    </>
  )
}