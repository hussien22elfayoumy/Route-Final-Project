import {
  ForgotPasswordFormType,
  VerifyResetCodeType,
} from '../types/schemas/forgot-password-form-schema';
import { NavigateFunction } from 'react-router-dom';
import toast from 'react-hot-toast';

export async function onForgotPasswordFormSubmit(
  values: ForgotPasswordFormType,
  navigate: NavigateFunction
) {
  console.log(values);
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/forgotPasswords`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    console.log('res', res);
    console.log('data', data);

    if (!res.ok) throw new Error(data.message);

    toast.success(`${data.message}`);

    setTimeout(() => navigate('/verify-code'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}

export async function onVerifyCodeFormSubmit(
  values: VerifyResetCodeType,
  navigate: NavigateFunction
) {
  console.log(values);
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verifyResetCode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    console.log('res', res);
    console.log('data', data);

    if (!res.ok) throw new Error(data.message);

    toast.success(`${data.status}: you can reset your password now`);

    setTimeout(() => navigate('/reset-password'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}
