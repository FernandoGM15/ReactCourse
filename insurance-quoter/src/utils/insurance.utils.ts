export const getYearDifference = (year: number) => {
  return new Date().getFullYear() - year;
};

export const brandCalc = (brand: number) => {
  switch (brand) {
    case 1:
      return 1.3;
    case 2:
      return 1.15;
    case 3:
      return 1.05;
    default:
      return 1.0;
  }
};

export const planCalc = (plan: number) => {
  return plan === 1 ? 1.2 : 1.5;
};

export const currencyFormat = (quantity: number) => {
  return quantity.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
