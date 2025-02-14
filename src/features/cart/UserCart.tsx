import { useCartCtx } from '../../contexts/CartContext';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import UpdateCartItemsQty from './UpdateCartItemsQty';
import { useState } from 'react';
export default function UserCart() {
  const {
    userCart,
    isLoading,
    error: cartError,
    isClearingCart,
    handleDeleteUserCart,
    handleDeleteCartItem,
  } = useCartCtx();

  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);

  async function handleDeleteItem(productId: string) {
    setDeletingProductId(productId);
    await handleDeleteCartItem(productId);
    setDeletingProductId(null);
  }

  if (isLoading) {
    return <Loader />;
  }

  if (cartError) {
    return <p className="text-center text-lg font-bold text-red-600">{cartError}</p>;
  }

  return (
    <>
      {userCart?.numOfCartItems! > 0 ? (
        <div className="relative mx-auto max-w-[1000px] overflow-x-auto border border-border-light shadow-sm sm:rounded-lg">
          <table className="w-full text-center text-sm">
            <thead className="border-b-border-dark bg-gray-100 text-xs font-bold uppercase">
              <tr>
                <th
                  scope="col"
                  className="px-16 py-3"
                >
                  <span className="sr-only">Image</span>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Qty
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userCart?.data.products.map((product) => (
                <tr
                  key={product.product.id}
                  className="border-b border-border-dark bg-card-bg hover:bg-card-bg/10"
                >
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="max-h-full w-10 max-w-full md:w-32"
                      alt={product.product.title}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    <Link
                      className="hover:underline"
                      to={`/products/${product.product.id}/${product.product.category.name}`}
                    >
                      {product.product.title.split(' ').slice(0, 2).join(',')}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <UpdateCartItemsQty
                      productId={product.product.id}
                      qty={product.count}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{product.price} EGP</td>
                  <td className="px-6 py-4">
                    <button
                      disabled={deletingProductId === product.product.id}
                      onClick={() => handleDeleteItem(product.product.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="border-b">
                <td className="px-6 py-3 text-left text-lg font-semibold">
                  Total Cart: {userCart?.data.totalCartPrice} EGP
                </td>

                <td
                  colSpan={3}
                  className="p-1 text-left"
                >
                  <Link
                    to="/checkout"
                    className="rounded-lg bg-color-base px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-color-base disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Checkout now
                  </Link>
                </td>
                <td className="p-1">
                  <button
                    disabled={isClearingCart}
                    onClick={handleDeleteUserCart}
                    className="rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Clear All Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg font-bold">
          No Cart items found{' '}
          <Link
            to="/"
            className="text-color-base underline"
          >
            Add now{' '}
          </Link>
        </p>
      )}
    </>
  );
}
