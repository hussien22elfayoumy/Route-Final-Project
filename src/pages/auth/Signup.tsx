import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUpFormSchema, SignUpFormType } from '../../types/schemas/signup-form-schema';

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  async function onSignUpFormSubmit(values: SignUpFormType) {
    console.log(values);
  }

  return (
    <div className="py-5">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Create a new account now
        </h1>
        <form
          onSubmit={handleSubmit(onSignUpFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="Your name"
              {...register('name')}
            />
            {errors.name && <p className="text-red-400">{errors.name.message}</p>}
          </div>

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
              htmlFor="phone"
              className="mb-2 block text-sm font-medium"
            >
              Your phone
            </label>
            <input
              type="tel"
              id="phone"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="Your phone"
              {...register('phone')}
            />
            {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              {...register('password')}
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
          </div>

          <div>
            <label
              htmlFor="rePassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm password
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
            disabled={isSubmitting}
            type="submit"
            className="h-11 w-full self-end rounded-lg bg-color-base px-4 py-2 text-center font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-emerald-600"
          >
            {isSubmitting ? 'Creating your account' : 'Create an account'}
          </button>

          <p className="text-sm text-text-dark">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-color-base hover:underline"
            >
              Sign in now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
