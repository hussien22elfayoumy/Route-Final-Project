import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { onResetPasswordFormSubmit } from '../../utils/auth';
import { resetPasswordFormsSchema, resetPasswordFormsType } from '../../types/schemas/auth-schema';

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<resetPasswordFormsType>({
    resolver: zodResolver(resetPasswordFormsSchema),
  });
  const navigate = useNavigate();

  return (
    <div
      onSubmit={handleSubmit((values) => onResetPasswordFormSubmit(values, navigate))}
      className="pt-24"
    >
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Reset your password
        </h1>
        <form className="flex flex-col gap-4 md:gap-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="name@company.com"
              {...register('email')}
            />
            {errors.email && <p className="text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              New password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              {...register('newPassword')}
            />
            {errors.newPassword && <p className="text-red-400">{errors.newPassword.message}</p>}
          </div>

          <div>
            <label
              htmlFor="rePassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="rePassword"
              placeholder="Confirm Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              {...register('rePassword')}
            />
            {errors.rePassword && <p className="text-red-400">{errors.rePassword.message}</p>}
          </div>

          <button
            type="submit"
            className="h-11 w-full self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600"
          >
            {isSubmitting ? 'Resetting your password' : 'Reset password'}
          </button>
        </form>
      </div>
    </div>
  );
}
