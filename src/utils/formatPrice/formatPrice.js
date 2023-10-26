export function formatPrice(number) {
  if (number < 1) {
    return number.toLocaleString(undefined, { minimumFractionDigits: 6 });
  } else {
    return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
  }
}
