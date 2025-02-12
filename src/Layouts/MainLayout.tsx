import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="text-text-base bg-gray-100">
      <Navbar />
      <main className="container mx-auto min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
