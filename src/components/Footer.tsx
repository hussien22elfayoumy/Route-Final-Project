import { Link } from 'react-router-dom';
import AppLogo from '../assets/app-logo.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-card-bg border-t-border-light border-t pt-5">
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
          <h2 className="text-text-dark text-lg font-semibold">Get Our app now</h2>
          <p className="text-text-light mb-3">
            We will send you a link , open it on your phone to download the app
          </p>

          <div className="my-2 flex items-center gap-5">
            <input
              type="text"
              className="h-10 w-3/4 rounded-lg border border-slate-200 p-2 shadow-sm"
              placeholder="Your Email Address"
            />
            <button className="bg-color-base hover:bg-color-dark focus:ring-color-dark w-1/4 rounded-lg px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4">
              Get the App Link
            </button>
          </div>
        </div>
        <p className="border-t-border-dark border-t py-2 pb-3 text-center font-semibold">
          All Copyrights reserved &copy; | <span className="text-color-base">FreshCartApp</span>{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
