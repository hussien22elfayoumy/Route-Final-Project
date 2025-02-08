import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <nav className="mb-10 flex gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/brands">Brands</Link>
        </li>
        <li>
          <Link to="/wishList">WishList</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
