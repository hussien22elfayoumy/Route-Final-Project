import { FaMinus, FaPlus } from 'react-icons/fa6';
import { useCartCtx } from '../../contexts/CartContext';
import { useState } from 'react';

export default function UpdateCartItemsQty({ qty, productId }: { qty: number; productId: string }) {
  const { handleUpdateCartItem } = useCartCtx();

  const [updateCartItemId, setUpdateCartItemId] = useState<string | null>(null);

  async function handleUpdateItem(productId: string, count: number) {
    setUpdateCartItemId(productId);
    await handleUpdateCartItem(productId, count);
    setUpdateCartItemId(null);
  }

  return (
    <div className="flex items-center justify-center gap-3 text-text-dark">
      <button
        disabled={updateCartItemId === productId}
        onClick={() => handleUpdateItem(productId, qty - 1)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-30"
        type="button"
      >
        <FaMinus />
      </button>
      <div className="w-3 font-semibold">{qty}</div>
      <button
        disabled={updateCartItemId === productId}
        onClick={() => handleUpdateItem(productId, qty + 1)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-30"
        type="button"
      >
        <FaPlus />
      </button>
    </div>
  );
}
