import { FaMinus, FaPlus } from 'react-icons/fa6';
import test from '../../assets/slider-image-1.jpeg';
import { useCartCtx } from '../../contexts/CartContext';
export default function UserCart() {
  const { userCart } = useCartCtx();
  console.log(userCart);
  return (
    <div className="relative mx-auto max-w-[1000px] overflow-x-auto border border-border-light shadow-sm sm:rounded-lg">
      <table className="w-full text-left text-sm">
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
                {product.product.title.split(' ').slice(0, 2).join(',')}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3 text-text-dark">
                  <button
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                    type="button"
                  >
                    <FaMinus />
                  </button>
                  <div className="font-semibold">{product.count}</div>
                  <button
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                    type="button"
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold">{product.price} EGP</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
        <tr className="border-b">
          <td className="px-6 py-3 pe-0 text-end text-base font-bold">Total Cart:</td>
          <td
            colSpan={2}
            className="py-3 pe-6 ps-2 text-base font-bold"
          >
            {userCart?.data.totalCartPrice} EGP
          </td>
          <td className="px-6 py-3">
            <a
              href="#"
              className="text-base font-bold text-red-600 hover:underline"
            >
              checkout
            </a>
          </td>
          <td className="px-6 py-3">
            <a
              href="#"
              className="text-base font-bold text-red-600 hover:underline"
            >
              Remove
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}
