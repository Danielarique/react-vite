import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
  if(index === 'last') index= context.order?.length -1;
  console.log(index)
    return <Layout>
      <div className="flex  w-80 items-center relative justify-center mb-2">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon
            className="h-4 w-4 text-black cursor-pointer"
            /*   onClick={() => handleMinusPlus(id, "minus")} */s
          />
        </Link>

        <h1>My Orders</h1>
      </div>
       <div className="flex flex-col w-80">
         {context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            count={product.count}
            id={product.id}
            title={product.title}
            imgUrl={product.images}
            price={product.price}


          />
        ))
} 
      </div>
    </Layout>;
  }
  
  export default MyOrder;
  