import { NavigateFunction } from 'react-router-dom';
import { resetPasswordFormsType } from '../types/schemas/reset-password-form-schema';
import toast from 'react-hot-toast';

import { SignUpFormType } from '../types/schemas/signup-form-schema';
import { LoginFormType } from '../types/schemas/login-form-schema';
import {
  ForgotPasswordFormType,
  VerifyResetCodeType,
} from '../types/schemas/forgot-password-form-schema';

// TODO: Signup
export async function onSignUpFormSubmit(values: SignUpFormType, navigate: NavigateFunction) {
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

// TODO: Login
export async function onLoginFormSubmit(values: LoginFormType, navigate: NavigateFunction) {
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

// TODO: Forgot password
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

// TODO: verify reset code
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

// TODO: Reset password
export async function onResetPasswordFormSubmit(
  values: resetPasswordFormsType,
  navigate: NavigateFunction
) {
  console.log(values);
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/resetPassword`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    console.log('res', res);
    console.log('data', data);

    if (!res.ok) throw new Error(data.message);

    toast.success(`Sucess: Password was resetted successfully you can login now`);

    setTimeout(() => navigate('/login'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}
