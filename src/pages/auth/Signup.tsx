import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="py-5">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow xl:p-0">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Create a new account now
        </h1>
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="Your name"
            />
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
              name="email"
              id="email"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="name@company.com"
            />
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
              name="phone"
              id="phone"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="Your phone"
            />
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
              name="password"
              id="password"
              placeholder="Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Your Pssword"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
            />
          </div>

          <button
            type="submit"
            className="h-11 self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600"
          >
            Create an account
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
