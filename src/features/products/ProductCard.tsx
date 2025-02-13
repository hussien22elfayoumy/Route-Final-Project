import { Link } from 'react-router-dom';
import test from '../../assets/slider-image-1.jpeg';

export default function ProductCard() {
  return (
    <div className="f mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <Link to="#">
        <img
          className="h-[250px] w-full rounded-t-lg object-cover"
          src={test}
          alt="product image"
        />
      </Link>
      <div className="mt-3 flex flex-col gap-3 px-5 pb-5">
        <div className="flex items-center justify-between">
          <Link
            to="#"
            className="font-semibold tracking-tight text-color-base"
          >
            Brand
          </Link>

          <div className="flex items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
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
              5.0
            </span>
          </div>
        </div>

        <h5 className="mb-5 text-lg font-semibold tracking-tight text-text-dark">
          <Link to="#">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</Link>
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">599 EGP</span>
          <button className="rounded-lg bg-color-base px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-color-base">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
