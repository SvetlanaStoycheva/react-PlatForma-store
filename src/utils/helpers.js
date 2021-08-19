export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  const allTypes = data.map((item) => item[type]);
  let uniqueTypes = ['all', ...new Set(allTypes)];
  if (type === 'colors') {
    const merged = [].concat.apply([], allTypes);
    uniqueTypes = ['all', ...new Set(merged)];
  }

  return uniqueTypes;
};
