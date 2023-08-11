import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, product) => {
    event.stopPropagation();
   /*  const isInCart =
    context.cartProducts.filter((productCart) => productCart.id === product.id).length > 0; */
    const index = context.cartProducts.findIndex((productCart) => productCart.id ==  product.id);
    context.setCount(context.count + 1) 
    if(index == -1){
      product.count = 1;
      context.setCartProducts([...context.cartProducts, product]);
    }else{
      const products = context.cartProducts;
      products[index].count++;
      context.setCartProducts(products);

    }

    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

 
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) =>
            /* context.setCount(context.count + 1) */ addProductsToCart(
              event,
              data.data
            )
          }
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-bold">{data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
