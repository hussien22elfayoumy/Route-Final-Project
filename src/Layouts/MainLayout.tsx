import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="text-gray-600">
      <Navbar />
      <main className="container mx-auto min-h-screen pt-20">
        <Outlet />
      </main>
    </div>
  );
}
