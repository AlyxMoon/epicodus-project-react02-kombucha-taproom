
const defaultProducts = [
  {
    name: 'Health-Ade',
    brand: 'Health-Right',
    price: 6,
    pints: 90,
    flavor: 'ginger, lemon',
    description: 'Ready for a delicious and healthy taste bud experience? Get health-ade!',
  },
  {
    name: 'Strawberry Yum',
    brand: 'Health-Right',
    price: 8,
    pints: 8,
    flavor: 'strawberry, basil',
    description: 'Our seasonal classic. Fresh organic strawberries combined with fresh herbs combine to make a treat that everyone can enjoy. Get a glass while supplies last!',
  },
  {
    name: 'Rowdy Earth',
    brand: 'Rough Tongue Tonics',
    price: 5,
    pints: 110,
    flavor: 'molasses, pumpkin',
    description: 'Two flavors you don\'t typically see together. But you aren\'t typical. You\'re tough, and you need a drink to match. With fresh, strong ingredients from the earth, this drink will revitalize you and give you the energy you need to keep on trucking.',
  },
  {
    name: 'Tea You In Hell',
    brand: 'Rough Tongue Tonics',
    price: 9,
    pints: 54,
    flavor: 'green tea, jalapeno',
    description: 'You would wish this drink on your greatest friend, because it\'ll see you through thick and thin. When the times are tough and you need some tough love back, throw back a glass infused with the most righteous of jalapenos and get your act together.',
  },
  {
    name: 'Blueberry Lemon',
    brand: 'Simple',
    price: 3,
    pints: 3,
    flavor: 'lemon, blueberry',
    description: 'We don\'t believe in wasting time with slogans. We make kombucha, enjoy.',
  },
  {
    name: 'Apple Cinammon',
    brand: 'Simple',
    price: 3,
    pints: 20,
    flavor: 'apple, cinnamon',
    description: 'We don\'t believe in wasting time with slogans. We make kombucha, enjoy.',
  },
]

export const getProducts = async () => {
  const products = window.localStorage.getItem('r2-kombucha-products')

  return products ? JSON.parse(products) : defaultProducts
}

export const updateProducts = async (products = []) => {
  window.localStorage.setItem('r2-kombucha-products', JSON.stringify(products))
  return products
}