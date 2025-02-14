import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useCartCtx } from '../../contexts/CartContext';

export default function UpdateCartItemsQty({ qty, productId }: { qty: number; productId: string }) {
  const { handleUpdateCartItem } = useCartCtx();

  return (
    <div className="flex items-center justify-center gap-3 text-text-dark">
      <button
        onClick={() => handleUpdateCartItem(productId, qty - 1)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
        type="button"
      >
        <FaMinus />
      </button>
      <div className="w-3 font-semibold">{qty}</div>
      <button
        onClick={() => handleUpdateCartItem(productId, qty + 1)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
        type="button"
      >
        <FaPlus />
      </button>
    </div>
  );
}
