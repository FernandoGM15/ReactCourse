export type Base = {
  id: number;
  name: string;
};

export const BRANDS: Base[] = [
  { id: 1, name: "European" },
  { id: 2, name: "American" },
  { id: 3, name: "Asian" },
];

export const PLANS: Base[] = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Complete" },
];

const MAX_YEARS: number = new Date().getFullYear();

export const YEARS: number[] = Array.from(
  new Array(20),
  (_, index) => MAX_YEARS - index
);
