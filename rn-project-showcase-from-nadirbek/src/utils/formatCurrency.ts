const formatCurrency = (value: number, options?: Intl.NumberFormatOptions) => {
  return `${Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
    ...options,
  }).format(value)} ₸`;
};

export default formatCurrency;
