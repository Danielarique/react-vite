import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import {
  calculateTotalCartProducts,
  getCurrentDate,
  totalPrice,
} from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    console.log(context.cartProducts);
    const productToDelete = context.cartProducts.find(
      (productCart) => productCart.id == id
    );
    const countProductToDelete = productToDelete["count"];
    console.log(countProductToDelete);
    console.log(context.count);

    context.setCount(context.count - countProductToDelete);
    context.setCartProducts(filteredProducts);
    // context.setCount(filteredProducts.length)
  };

  const handleMinusPlus = (id, action) => {
    const index = context.cartProducts.findIndex(
      (productCart) => productCart.id == id
    );
    const products = [...context.cartProducts];
    if (action == "minus") {
      context.setCount(context.count - 1);

      if (products[index].count > 0) {
        products[index].count--;
        context.setCartProducts(products);
      }

      if (context.cartProducts[index].count === 0) {
        products[index].count--;
        handleDelete(id);
      }
    } else {
      context.setCount(context.count + 1);

      products[index].count++;
      context.setCartProducts(products);
    }

    console.log(context.cartProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: getCurrentDate(),
      products: context.cartProducts,
      totalProducts: calculateTotalCartProducts(context.cartProducts),
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);

    context.setCartProducts([]);
    context.setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div
          onClick={() => context.closeCheckoutSideMenu()}
          className="cursor-pointer"
        >
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          /*  <div key={product.id}>  {product.count}--{product.title}</div> */
          <OrderCard
            key={product.id}
            count={product.count}
            id={product.id}
            title={product.title}
            imgUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
            handleMinusPlus={handleMinusPlus}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="font-bold text-lg text-center mb-2">
          <span>Total: </span>
          <span>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black w-full py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
