import PropTypes from 'prop-types'

import './FeaturedProductList.scss'

const FeaturedProductList = ({ products,seeProductDetails }) => {

  const handleLinkClick = (event, index) => {
    event.preventDefault()
    seeProductDetails(products[index].id)
  }

  return (
    <section className="featured-products-list">
      <h3>Wow! These kegs sure are popular. Be sure to get some before they run out!</h3>

      {products.map((product, i) => (
        <article key={`product-${i}-${product.name}`}>
          <div className="name-box">
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
          </div>

          <div className="summary-box">
            <dl>
              <dt>Price</dt>
              <dd>${product.price}</dd>

              <dt>Flavor</dt>
              <dd>{product.flavor}</dd>

              <dt>Pints Left</dt>
              <dd>{product.pints}</dd>
            </dl>
            <a 
              href={`/products/${i}`}
              className="btn btn-primary"
              onClick={(event) => handleLinkClick(event, i)}
            >
              See Details
            </a>
          </div>

          <div className="details-box">
            <p>{product.description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

FeaturedProductList.propTypes = {
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

export default FeaturedProductList
