import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCards";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
    <div className="mb-4">My Orders</div>
      {context.order.map((order,index) => {
        /*     <div>{order.totalProducts}-{order.totalPrice}</div> */
        return(
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
        )
       
      })}
    </Layout>
  );
}

export default MyOrders;
