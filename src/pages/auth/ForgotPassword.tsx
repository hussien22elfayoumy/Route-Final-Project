import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  forgotPasswordFormSchema,
  ForgotPasswordFormType,
} from '../../types/schemas/forgot-password-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ForgotPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  async function onForgotPasswordFormSubmit(values: ForgotPasswordFormType) {
    console.log(values);
  }

  return (
    <div className="pt-24">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Forgot your password
        </h1>
        <form
          onSubmit={handleSubmit(onForgotPasswordFormSubmit)}
          className="flex flex-col gap-4 md:gap-6"
        >
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

          <button
            disabled={isSubmitting}
            type="submit"
            className="h-11 self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600"
          >
            {isSubmitting ? 'Resetting your password' : 'Reset password'}
          </button>

          <p className="text-sm text-text-dark">
            Remember your password?{' '}
            <Link
              to="/login"
              className="font-medium text-color-base hover:underline"
            >
              Login in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
