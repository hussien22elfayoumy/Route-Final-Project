import { Link } from 'react-router-dom';
import Error from '../assets/error.svg';
export default function NotFound() {
  return (
    <div className="py-20 text-center text-xl font-semibold text-text-dark">
      <div className="mx-auto max-w-[500px]">
        <img
          src={Error}
          className="w-full"
          alt="Error page"
        />
      </div>
      <p className="">The page you looked for is not found</p>
      <Link
        to="/"
        className="text-color-base hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
