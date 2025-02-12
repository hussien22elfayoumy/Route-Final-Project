import { Navigate } from 'react-router-dom';

export default function ProtectdRoute({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'public' | 'protected';
}) {
  if (type === 'public' && !localStorage.getItem('loggedInUser')) {
    return <> {children}</>;
  }
  if (type === 'public' && localStorage.getItem('loggedInUser')) {
    return <Navigate to="/" />;
  }
  if (type === 'protected' && localStorage.getItem('loggedInUser')) {
    return <> {children}</>;
  }
  if (type === 'protected' && !localStorage.getItem('loggedInUser')) {
    return <Navigate to="/login" />;
  }
}
