export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
