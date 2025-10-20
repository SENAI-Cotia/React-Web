export const formatNumber = (number: number, language: string) => {
  return new Intl.NumberFormat(language).format(number);
};
