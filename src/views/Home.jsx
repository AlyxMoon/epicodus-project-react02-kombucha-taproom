import { Fragment } from 'react'
import PropTypes from 'prop-types'

import ProductList from '../components/ProductList'

const PageHome = ({ featuredProducts, seeProductDetails }) => {
  return (
    <Fragment>
      <h2>Welcome to the taproom!</h2>

      <p>Feeling down? Feeling thirsty? Feeling bored? All good reasons to have a cold glass of kombucha. Check out the product list for our full offerings!</p>

      <hr />

      <ProductList
        intro="Wow! These kegs sure are popular. Be sure to get some before they run out!"
        products={featuredProducts} 
        seeProductDetails={seeProductDetails} 
      />
    </Fragment>
  )
}

PageHome.propTypes = {
  featuredProducts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
    description: PropTypes.string,
    pints: PropTypes.number,
  })),
  seeProductDetails: PropTypes.func,
}

export default PageHome
