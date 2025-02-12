import { NavigateFunction } from 'react-router-dom';
import { LoginFormType } from '../types/schemas/login-form-schema';
import toast from 'react-hot-toast';

export default async function onLoginFormSubmit(values: LoginFormType, navigate: NavigateFunction) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    const loggenInUser = {
      token: data.token,
      name: data.user.name,
      email: data.user.email,
    };

    localStorage.setItem('loggenInUser', JSON.stringify(loggenInUser));

    toast.success(`${data.message}: Welcome ${data.user.name} to fresh cart`);

    setTimeout(() => navigate('/'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}
