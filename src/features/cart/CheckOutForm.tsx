import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CheckOutFormSchema, CheckOutFormType } from '../../types/schemas/checkout-form-schema';
import { onCheckoutFormSubmit } from '../../utils/api';
import { useCartCtx } from '../../contexts/CartContext';

export default function CheckoutForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CheckOutFormType>({
    resolver: zodResolver(CheckOutFormSchema),
  });
  const { userCart } = useCartCtx();
  const navigate = useNavigate();

  return (
    <div className="mx-auto h-full max-w-[600px] rounded-lg bg-card-bg p-8 px-10 shadow">
      <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight">
        Complete your order now
      </h1>
      <form
        onSubmit={handleSubmit((values) => onCheckoutFormSubmit(values, userCart?.cartId!))}
        className="flex flex-col gap-4 md:gap-6"
      >
        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-sm font-medium"
          >
            Your City
          </label>
          <input
            type="city"
            id="city"
            className="block h-11 w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
            placeholder="eg: Cairo"
            {...register('city')}
          />
          {errors.city && <p className="text-red-400">{errors.city.message}</p>}
        </div>

        <div>
          <label
            htmlFor="details"
            className="mb-2 block text-sm font-medium"
          >
            Address Details
          </label>
          <textarea
            id="details"
            className="block min-h-[80px] w-full rounded-lg border-2 border-border-dark bg-card-bg p-2.5 shadow-sm focus:border-2 focus:border-color-base focus:outline-none focus:ring-color-base active:border-color-base"
            placeholder="your address"
            {...register('details')}
          />
          {errors.details && <p className="text-red-400">{errors.details.message}</p>}
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

        <button
          disabled={isSubmitting}
          type="submit"
          className="h-11 w-full self-end rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isSubmitting ? 'loading...' : 'Checkout'}
        </button>

        <p className="text-sm text-text-dark">
          Want to buy more?{' '}
          <Link
            to="/products"
            className="font-medium text-color-base hover:underline"
          >
            All products
          </Link>
        </p>
      </form>
    </div>
  );
}
