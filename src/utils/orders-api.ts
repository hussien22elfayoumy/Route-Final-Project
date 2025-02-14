import toast from 'react-hot-toast';
import { CheckOutFormType } from '../types/schemas/checkout-form-schema';

export async function onCheckoutFormSubmit(values: CheckOutFormType, cartId: string) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/orders/checkout-session/${cartId}?url=https://route-final-project.vercel.app`,
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
