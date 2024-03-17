export const getColorByCases = (cases) => {
  if (cases < 0 || cases >= 100000000) {
    return '#FF6E54';
  } else if (cases >= 10000000) {
    return '#FF8874';
  } else if (cases >= 1000000) {
    return '#FFA999';
  } else if (cases >= 100000) {
    return '#FFB7AA';
  } else if (cases >= 10000) {
    return '#FFDAD3';
  } else if (cases >= 1000) {
    return '#FFEBE7';
  } else {
    return '#F5F4F6';
  }
}

export const numberWithDot = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}