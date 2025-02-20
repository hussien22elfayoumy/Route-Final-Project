import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartProduct } from '../../types/interfaces';

export default function OrderItemsDetails({ cartItems }: { cartItems: CartProduct[] }) {
  return (
    <div className="relative mx-auto overflow-x-auto border border-border-light shadow-sm sm:rounded-lg">
      <table className="w-full text-center text-sm">
        <thead className="border-b-border-dark bg-gray-100 text-xs font-bold uppercase">
          <tr>
            <th
              scope="col"
              className="sr-only py-3 ps-16"
            >
              <span>Image</span>
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
              Quantity
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
              Total Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr
              key={product.product.id}
              className="border-b border-border-dark bg-card-bg hover:bg-card-bg/10"
            >
              <td className="p-4">
                <img
                  src={product.product.imageCover}
                  className="max-h-full w-10 md:w-12"
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
              <td className="px-6 py-4">{product.count}</td>
              <td className="px-6 py-4 font-semibold">{formatCurrency(product.price)}</td>
              <td className="px-6 py-4 font-semibold">
                {formatCurrency(product.price * product.count)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
