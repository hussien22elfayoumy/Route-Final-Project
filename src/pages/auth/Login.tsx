import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { onLoginFormSubmit } from '../../utils/auth';
import { loginFormSchema, LoginFormType } from '../../types/schemas/auth-schema';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Sign in to your account
        </h1>
        <form
          onSubmit={handleSubmit((values) => onLoginFormSubmit(values, navigate))}
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

          <div>
            <div className="mb-2 flex items-center justify-between text-sm font-medium">
              <label
                htmlFor="password"
                className=""
              >
                Your password
              </label>
              <Link
                to="/forgot-password"
                className="text-color-base hover:underline"
              >
                Forgot Your password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              {...register('password')}
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="h-11 w-full self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'getting you in' : 'Sign in'}
          </button>

          <p className="text-sm text-text-dark">
            Don’t have an account yet?{' '}
            <Link
              to="/sign-up"
              className="font-medium text-color-base hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
