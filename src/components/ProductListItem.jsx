import PropTypes from 'prop-types'

const ProductListItem = ({ product, seeProductDetails, removeProduct }) => {
  const handleLinkClick = (event) => {
    event.preventDefault()
    seeProductDetails(product.id)
  }

  const handleRemove = (event) => {
    event.preventDefault()
    removeProduct(product.id)
  }

  return (
    <article>
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
          href={`/products/${product.id}`}
          className="btn btn-primary"
          onClick={handleLinkClick}
        >
          See Details
        </a>
        <a
          href={`/products/${product.id}/delete`}
          className="btn btn-danger"
          onClick={handleRemove}
        >
          Remove Keg
        </a>
      </div>

      <div className="details-box">
        <p>{product.description}</p>
      </div>
    </article>
  )
}

ProductListItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
    description: PropTypes.string,
    pints: PropTypes.number,
  })),
  seeProductDetails: PropTypes.func,
  removeProduct: PropTypes.func,
}

export default ProductListItem
