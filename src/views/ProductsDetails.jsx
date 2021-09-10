import PropTypes from 'prop-types'

const PageProductsDetails = ({ product }) => {
  return (
    <section className="product-details-page">
      <h2>{product.name}</h2>

      <h5>By: {product.brand}</h5>

      <dl>
        <dt>Price</dt>
        <dd>${product.price}</dd>

        <dt>Flavor</dt>
        <dd>{product.flavor}</dd>
      </dl>

      <p>{product.description}</p>
    </section>
  )
}

PageProductsDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
  }).isRequired,
}

export default PageProductsDetails
