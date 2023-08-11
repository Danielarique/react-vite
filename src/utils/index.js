export const totalPrice = (products) => {
  return products.reduce((sum, item) => sum + item.price * item.count, 0);
};

export const calculateTotalCartProducts = (products) => {
  return products.reduce((sum, item) => sum + item.count, 0);
};

export const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}.${month}.${year}`;
};
