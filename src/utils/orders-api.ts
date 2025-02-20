import toast from 'react-hot-toast';
import { CheckOutFormType } from '../types/schemas/checkout-form-schema';
import { OrderResponse } from '../types/interfaces';

export async function onCheckoutFormSubmit(values: CheckOutFormType, cartId: string) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/orders/checkout-session/${cartId}?url=${import.meta.env.VITE_REDRICT_URL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: userToken,
        },
        body: JSON.stringify({
          shippingAddress: values,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    window.location.href = data.session.url;
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}

// NOTE: all orders
export async function fetchUserOrders(userId: string): Promise<OrderResponse[]> {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/orders/user/${userId}`, {
    method: 'GET',
    // headers: {
    //   token: userToken,
    // },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to get user Orders.');
  }

  return data;
}
