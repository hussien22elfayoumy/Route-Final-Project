import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

export default function MainLayout() {
  return (
    <div className="bg-gray-100 text-text-base">
      <Navbar />
      <main className="container mx-auto min-h-screen px-5 pt-[70px]">
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}
