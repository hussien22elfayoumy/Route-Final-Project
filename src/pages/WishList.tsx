import { useUserCtx } from '../contexts/UserContext';

export default function WishList() {
  const { user } = useUserCtx();
  return (
    <section className="py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold capitalize text-color-base">
        {user?.name} WishList
      </h2>
      <p className="mt-20 text-center">This Section is under development right now</p>
    </section>
  );
}
