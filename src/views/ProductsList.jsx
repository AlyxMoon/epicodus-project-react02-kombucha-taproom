import PropTypes from 'prop-types'

const PageProductsList = ({ products, seeProductDetails }) => {

  const handleLinkClick = (event, index) => {
    event.preventDefault()
    seeProductDetails(index)
  }

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

            <dt>Pints Left</dt>
            <dd>{product.pints}</dd>

            <dt></dt>
            <dd>
              <a 
                href={`/products/${i}`}
                className="btn btn-primary"
                onClick={(event) => handleLinkClick(event, i)}
              >
                See Details
              </a>
            </dd>
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
