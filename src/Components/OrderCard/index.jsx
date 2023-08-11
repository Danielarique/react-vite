import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imgUrl, price, count, handleDelete, handleMinusPlus } =
    props;

  const validateShowActions = () => {
    if (handleDelete && handleMinusPlus) {
      return (
        <>
          <MinusIcon
            className="h-4 w-4 text-black cursor-pointer"
            onClick={() => handleMinusPlus(id, "minus")}
          />
          <div className="flex w-5 h-5 rounded-md bg-gray-300 items-center justify-center ">
            {count}
          </div>
          <PlusIcon
            className="h-4 w-4 text-black cursor-pointer"
            onClick={() => handleMinusPlus(id, "plus")}
          />

          <TrashIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        </>
      );
    }
  };

  let units = '';
  if(!handleDelete && !handleMinusPlus){
    units = `(${count} units)`;
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-[70px] h-[70px] rounded-lg object-cover"
            src={imgUrl}
            alt={title}
          />
        </figure>
      </div>
      <div className="flex flex-col items-end gap-2 w-[80%]">
        <p className="text-sm font-light">{title}</p>
        <p className="text-lg font-medium">{units} ${price * count}</p>
      </div>
      <div className="flex items-center">
        {validateShowActions()}
      </div>
    </div>
  );
};

export default OrderCard;
