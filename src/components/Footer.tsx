import { Link } from 'react-router-dom';
import AppLogo from '../assets/app-logo.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-t-border-light bg-card-bg px-4 pt-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-2">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={AppLogo}
              className="h-7"
              alt="Fresh Cart logo"
            />
          </Link>
          <div className="social flex items-start gap-3">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div className="p-2">
          <h2 className="text-lg font-semibold text-text-dark">Get Our app now</h2>
          <p className="mb-3 text-text-light">
            We will send you a link , open it on your phone to download the app
          </p>

          <div className="my-2 flex flex-col items-center gap-5 md:flex-row">
            <input
              type="text"
              className="h-10 w-full rounded-lg border border-slate-200 p-2 shadow-sm md:w-3/4"
              placeholder="Your Email Address"
            />
            <button className="h-10 rounded-lg bg-color-base px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-color-dark md:w-1/4">
              Get the App Link
            </button>
          </div>
        </div>
        <p className="border-t border-t-border-dark py-2 pb-3 text-center font-semibold">
          All Copyrights reserved &copy; | <span className="text-color-base">FreshCartApp</span>{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
