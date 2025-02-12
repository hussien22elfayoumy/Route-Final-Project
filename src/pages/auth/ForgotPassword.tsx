import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="pt-24">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Forgot your password
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
              name="email"
              id="email"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="name@company.com"
            />
          </div>

          <button
            type="submit"
            className="h-11 self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600"
          >
            Reset password
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
