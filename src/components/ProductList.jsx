import PropTypes from 'prop-types'

import './FeaturedProductList.scss'
import ProductListItem from './ProductListItem'

const ProductList = ({ products, seeProductDetails, intro }) => {
  return (
    <section className="featured-products-list">
      {intro && (<h3>{intro}</h3>)}

      {products.map((product) => (
        <ProductListItem 
          key={product.id}
          product={product} 
          seeProductDetails={seeProductDetails}
        />
      ))}
    </section>
  )
}

ProductList.propTypes = {
  intro: PropTypes.string,
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

export default ProductList
