import PropTypes from 'prop-types'

import ProductList from '../components/ProductList'

const PageProductsList = ({ products, seeProductDetails }) => {
  return (
    <>
      <h1>Product List</h1>

      <ProductList 
        intro="We have a lot of great offerings, check it out!"
        products={products}
        seeProductDetails={seeProductDetails}
      />
    </>
  )
}

PageProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
    description: PropTypes.string,
    pints: PropTypes.number,
  })),
  seeProductDetails: PropTypes.func,
}

PageProductsList.defaultProps = {
  products: [],
  seeProductDetails: (i) => {
    console.log('test see product details:', i)
  },
}

export default PageProductsList
