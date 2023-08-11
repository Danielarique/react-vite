import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { calculateTotalCartProducts } from "../../utils";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
 
  return (
    <nav className="flex w-full justify-between top-0 items-center fixed z-10 py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/">
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink to="/all"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>All</NavLink>
        </li>

        <li>
          <NavLink to="/clothes"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Clothes</NavLink>
        </li>

        <li>
          <NavLink to="/electronics"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Electronics</NavLink>
        </li>

        <li>
          <NavLink to="/furnitures"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Furnitures</NavLink>
        </li>

        <li>
          <NavLink to="/toys"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Toys</NavLink>
        </li>

        <li>
          <NavLink to="/others"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Others</NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">daniela@gmail.com</li>

        <li>
          <NavLink to="/my-orders"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>My orders</NavLink>
        </li>

        <li>
          <NavLink to="/my-account"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>My account</NavLink>
        </li>

        <li>
          <NavLink to="/sign-in"  className={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign In</NavLink>
        </li>

       
        <li className="flex items-center">  <ShoppingCartIcon className="h-6 w-6 text-black"/> <div > {calculateTotalCartProducts(context.cartProducts)}</div> </li>
      </ul>
    </nav>
  );
};

export default Navbar;
