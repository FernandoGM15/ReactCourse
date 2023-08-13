export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-En", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
