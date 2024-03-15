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

export const transformCountryData = (item) => {
  switch (item.country) {
    case "USA":
      return { ...item, country: "United States of America" };
    case "UK":
      return { ...item, country: "United Kingdom" };
    case "S. Korea":
      return { ...item, country: "South Korea" };
    case "N. Korea":
      return { ...item, country: "North Korea" };
    case "Syrian Arab Republic":
      return { ...item, country: "Syria" };
    case "Libyan Arab Jamahiriya":
      return { ...item, country: "Libya" };
    case "Lao People's Democratic Republic":
      return { ...item, country: "Laos" };
    case "Bosnia":
      return { ...item, country: "Bosnia and Herz." };
    case "Congo":
      return { ...item, country: "Dem. Rep. Congo" };
    case "Central African Republic":
      return { ...item, country: "Central African Rep." };
    case "South Sudan":
      return { ...item, country: "S. Sudan" };
    case "Dominican Republic":
      return { ...item, country: "Dominican Rep." };
    default:
      return item;
  }
}