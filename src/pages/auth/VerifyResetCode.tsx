import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { onVerifyCodeFormSubmit } from '../../utils/auth';
import { verifyResetCodeSchema, VerifyResetCodeType } from '../../types/schemas/auth-schema';

export default function VerifyResetCode() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<VerifyResetCodeType>({
    resolver: zodResolver(verifyResetCodeSchema),
  });
  const navigate = useNavigate();

  return (
    <div className="pt-24">
      <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow">
        <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
          Check your email to verfiy reset code
        </h1>
        <form
          onSubmit={handleSubmit((values) => onVerifyCodeFormSubmit(values, navigate))}
          className="flex flex-col gap-4 md:gap-6"
        >
          <div>
            <label
              htmlFor="resetCode"
              className="mb-2 block text-sm font-medium"
            >
              reset code
            </label>
            <input
              type="text"
              id="resetCode"
              className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
              placeholder="reset code"
              {...register('resetCode')}
            />
            {errors.resetCode && <p className="text-red-400">{errors.resetCode.message}</p>}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="h-11 w-full self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'verifiying' : 'Verify reset code'}
          </button>

          <p className="text-sm text-text-dark">
            Didn't recive a reset code / Expired?{' '}
            <Link
              to="/forgot-password"
              className="font-medium text-color-base hover:underline"
            >
              try here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
