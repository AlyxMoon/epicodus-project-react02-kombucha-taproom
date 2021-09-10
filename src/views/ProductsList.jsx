import PropTypes from 'prop-types'

const PageProductsList = ({ products }) => {
  return (
    <>
      <h1>Product List</h1>

      {products.map((product, i) => (
        <div key={`product-${i}-${product.name}`}>
          <dl>
            <dt>Name</dt>
            <dd>{product.name}</dd>
            
            <dt>Brand</dt>
            <dd>{product.brand}</dd>

            <dt>Price</dt>
            <dd>${product.price}</dd>

            <dt>Flavor</dt>
            <dd>{product.flavor}</dd>
          </dl>
        </div>
      ))}
    </>
  )
}

PageProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    flavor: PropTypes.string,
  })),
}

PageProductsList.defaultProps = {
  products: [],
}

export default PageProductsList
