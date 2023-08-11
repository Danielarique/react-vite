import {
  CalendarIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { id, date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border-black border-2 p-4 rounded-lg w-80 font-medium text-lg hover:bg-gray-200">
      <div className="flex flex-col items-center justify-start">
        <span className="flex items-center justify-start w-full">
          <CalendarIcon className="h-4 w-4 text-black cursor-pointer mr-2" />{" "}
          {date}-
        </span>
        <span className="flex justify-start items-center w-full">
          <ShoppingBagIcon className="h-4 w-4 text-black cursor-pointer mr-2" />
          {totalProducts} Articles
        </span>
      </div>
      <div>
        <span className="flex justify-start items-center w-full text-2xl">
          <CurrencyDollarIcon className="h-4 w-4 text-black cursor-pointer mr-2" />
          {totalPrice}
        </span>
      </div>
    </div>
  );
};

export default OrdersCard;
