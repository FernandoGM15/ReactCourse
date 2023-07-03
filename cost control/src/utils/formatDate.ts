/**
 * @description Formats the date to Month Day, Year.
 * @param date
 */
export const formatDate = (date: number) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
