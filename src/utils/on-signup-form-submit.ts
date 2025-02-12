import toast from 'react-hot-toast';
import { SignUpFormType } from '../types/schemas/signup-form-schema';
import { NavigateFunction } from 'react-router-dom';

export default async function onSignUpFormSubmit(
  values: SignUpFormType,
  navigate: NavigateFunction
) {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    toast.success(`${data.message}: Account create succefully`);
    setTimeout(() => navigate('/login'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}
