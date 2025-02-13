import { Link } from 'react-router-dom';
import { IProduct } from '../../utils/api';
import ProductDetailsImageSlider from './ProductDetailsImageSlider';

export default function ProductDetailsCard({
  productDetails,
}: {
  productDetails: IProduct | undefined;
}) {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 md:flex-row">
      <div className="w-full md:w-1/3">
        <ProductDetailsImageSlider imgs={productDetails?.images} />
      </div>
      <div className="p-5 md:w-2/3">
        <h2 className="mb-4 text-2xl font-semibold text-text-dark">{productDetails?.title}</h2>
        <p className="mb-6 font-semibold text-text-light">{productDetails?.description}</p>

        <div className="space-y-5">
          <Link
            to="#"
            className="font-semibold tracking-tight text-color-base"
          >
            {productDetails?.category.name}
          </Link>

          <div className="flex items-center">
            <div className="l flex items-center justify-between space-x-1 rtl:space-x-reverse">
              <svg
                className="size-5 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="ms-2 rounded-sm bg-color-base/20 px-2 py-0.5 text-xs font-semibold">
              {productDetails?.ratingsAverage}
            </span>
          </div>

          <p className="text-xl font-bold">{productDetails?.price} EGP</p>

          <button className="w-full rounded-lg bg-color-base px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-color-base">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
