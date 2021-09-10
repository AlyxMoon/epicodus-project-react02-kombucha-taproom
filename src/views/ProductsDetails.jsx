import PropTypes from 'prop-types'

const PageProductsDetails = ({ product, updateProduct }) => {

  const handleBuyPint = () => {
    updateProduct({
      ...product,
      pints: Math.max(0, product.pints - 1),
    })
  }

  return (
    <section className="product-details-page">
      <h2>{product.name}</h2>

      <h5>By: {product.brand}</h5>

      <dl>
        <dt>Price</dt>
        <dd>${product.price}</dd>

        <dt>Flavor</dt>
        <dd>{product.flavor}</dd>

        <dt>Pints Left</dt>
        <dd>{product.pints === 0}</dd>
      </dl>

      <p>{product.description}</p>

      <div>
        <button 
          className="btn btn-primary"
          onClick={handleBuyPint}
          disabled={product.pints <= 0}
        >Buy a Pint</button>
      </div>
    </section>
  )
}

PageProductsDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
    description: PropTypes.string,
    pints: PropTypes.number,
  }).isRequired,
  updateProduct: PropTypes.func,
}

PageProductsDetails.defaultProps = {
  updateProduct: (product) => {
    console.log('test update product:', product)
  },
}

export default PageProductsDetails
