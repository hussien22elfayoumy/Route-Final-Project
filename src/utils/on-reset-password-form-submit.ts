import { NavigateFunction } from 'react-router-dom';
import { resetPasswordFormsType } from '../types/schemas/reset-password-form-schema';
import toast from 'react-hot-toast';

export default async function onResetPasswordFormSubmit(
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
