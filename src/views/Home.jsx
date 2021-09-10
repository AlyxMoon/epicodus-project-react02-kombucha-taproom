import { Fragment } from 'react'
import PropTypes from 'prop-types'

import FeaturedProductList from '../components/FeaturedProductList'

const PageHome = ({ featuredProducts, seeProductDetails }) => {
  return (
    <Fragment>
      <h2>Welcome to the taproom!</h2>

      <p>Feeling down? Feeling thirsty? Feeling bored? All good reasons to have a cold glass of kombucha. Check out the product list for our full offerings!</p>

      <hr />

      <FeaturedProductList 
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
