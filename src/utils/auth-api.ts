import { NavigateFunction } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  ForgotPasswordFormType,
  LoginFormType,
  resetPasswordFormsType,
  SignUpFormType,
  VerifyResetCodeType,
} from '../types/schemas/auth-schema';
import { UserType } from '../contexts/UserContext';

// TODO: Signup
export async function onSignUpFormSubmit(values: SignUpFormType, navigate: NavigateFunction) {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
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
export async function onLoginFormSubmit(
  values: LoginFormType,
  navigate: NavigateFunction,
  handleUser: (user: UserType) => void
) {
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
    handleUser(loggenInUser);

    localStorage.setItem('loggedInUser', JSON.stringify(loggenInUser));

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
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/forgotPasswords`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

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
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verifyResetCode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

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
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/resetPassword`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    toast.success(`Sucess: Password was resetted successfully you can login now`);

    setTimeout(() => navigate('/login'), 1000);
  } catch (err) {
    toast.error(`Error: ${(err as Error).message}`);
  }
}

export function handleLogout(handleUser: (user: UserType | null) => void) {
  localStorage.removeItem('loggedInUser');
  handleUser(null);
}

// TODO: Verify token to get user Id

interface VerifyTokenResponse {
  message: string;
  decoded: {
    id: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
  };
}

export async function verifyToken(): Promise<VerifyTokenResponse> {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/verifyToken`, {
    method: 'GET',
    headers: {
      token: userToken,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to get user cart.');
  }

  return data;
}
