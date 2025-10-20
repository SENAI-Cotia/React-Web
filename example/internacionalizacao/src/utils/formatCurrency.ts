export const formatCurrency = (value: number, language: string) => {
  const currencyMap: Record<string, string> = {
    pt: "BRL",
    en: "USD",
    es: "EUR",
  };

  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: currencyMap[language] || "BRL",
  }).format(value);
};
