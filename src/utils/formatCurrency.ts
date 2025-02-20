export function formatCurrency(number: number) {
  const formatted = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EGP' }).format(
    number
  );

  return formatted;
}
