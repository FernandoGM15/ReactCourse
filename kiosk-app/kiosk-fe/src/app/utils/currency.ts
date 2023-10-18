export const currencyFormat = (currency = 0) => {
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
