export const formattedNumber = number => {
  return number.toLocaleString('uk-UA').replace(/\s/g, ',');
};
