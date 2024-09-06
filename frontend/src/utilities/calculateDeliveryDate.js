export const calculateDeliveryDate = (daysToAdd) => {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toDateString();
};
