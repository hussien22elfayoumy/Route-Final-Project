import { FaMinus, FaPlus } from 'react-icons/fa6';
import test from '../../assets/slider-image-1.jpeg';
export default function UserCart() {
  return (
    <div className="relative overflow-x-auto border border-border-light shadow-sm sm:rounded-lg">
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
          <tr className="border-b border-border-dark bg-card-bg hover:bg-card-bg/10">
            <td className="p-4">
              <img
                src={test}
                className="max-h-full w-16 max-w-full md:w-32"
                alt="Apple Watch"
              />
            </td>
            <td className="px-6 py-4 font-semibold">Apple Watch</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3 text-text-dark">
                <button
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  type="button"
                >
                  <FaMinus />
                </button>
                <div className="font-semibold">1</div>
                <button
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                  type="button"
                >
                  <FaPlus />
                </button>
              </div>
            </td>
            <td className="px-6 py-4 font-semibold">$599</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-red-600 hover:underline"
              >
                Remove
              </a>
            </td>
          </tr>
        </tbody>
        <tr className="border-b">
          <td
            colSpan={3}
            className="px-6 py-3 text-center text-base font-bold"
          >
            Total Cart
          </td>
          <td className="px-6 py-3 text-base font-bold">550$</td>
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
