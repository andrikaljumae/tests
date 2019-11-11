const PHONES_NAMES = [
  "Samsung Galaxy S9 G960U 64GB",
  "Samsung Galaxy A20 32GB A205G/DS 6.4",
  "Samsung Galaxy A50 SM-A505G 64GB 4GB RAM",
  "Apple iPhone 11 Pro Max (64GB) - Space Gray",
  "Apple iPhone 6S, GSM Unlocked, 64GB - Rose Gold (Renewed)",
  "Apple iPhone XR, 64GB, White - Fully Unlocked (Renewed)"
];

const PHONE_PRICES = [
  500,
  178,
  1100,
  167,
  550,
  300
];

const createProducts = () => {
  return PHONES_NAMES.map( (name, index) => ({
    title: name,
    price: PHONE_PRICES[index]
  }))
};

module.exports = createProducts;