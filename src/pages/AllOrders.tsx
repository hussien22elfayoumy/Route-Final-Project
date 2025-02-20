import { Accordion } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useUserCtx } from '../contexts/UserContext';
import { useUserOrders } from '../hooks/useUserOrders';
import { formatCurrency } from '../utils/formatCurrency';
import OrderItemsDetails from '../features/allOrders/OrderItemsDetails';

export default function AllOrders() {
  const { user } = useUserCtx();
  const { data: userOrderData, isLoading, isError, error } = useUserOrders();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <section className="py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold capitalize text-color-base">
        {user?.name} Orders
      </h2>

      {userOrderData?.length ? (
        <Accordion collapseAll>
          {userOrderData?.map((order) => (
            <Accordion.Panel key={order.id}>
              <Accordion.Title>
                Order: <span className="text-color-base">{order.id}</span>
              </Accordion.Title>
              <Accordion.Content>
                <div className="order-details">
                  <p>
                    <span className="font-semibold">Date:</span> {order.createdAt.split('T')[0]}
                  </p>
                  <p>
                    <span className="font-semibold">Payment method:</span> {order.paymentMethodType}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{' '}
                    {order.isPaid ? 'Paid' : 'Not paid'}
                  </p>
                  <p>
                    <span className="font-semibold">Delivered:</span>{' '}
                    {order.isDelivered ? 'Delivered' : 'Not Delivered'}
                  </p>
                  <p>
                    <span className="font-semibold">Total Price:</span>{' '}
                    {formatCurrency(order.totalOrderPrice)}
                  </p>
                </div>

                <h2 className="mb-2 font-semibold">Order Details:</h2>
                <OrderItemsDetails cartItems={order.cartItems} />
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-lg font-bold">
          You don't have any Orders{' '}
          <Link
            to="/products"
            className="text-color-base underline"
          >
            Browse Products now{' '}
          </Link>
        </p>
      )}
    </section>
  );
}
