import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const PageProductsCreate = ({ 
  createProduct,
}) => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    flavor: '',
    pints: 120,
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    createProduct(product)
  }

  const handleUpdate = (value, property) => {
    setProduct({
      ...product,
      [property]: property === 'price' ? parseInt(value) : value,
    })
  }

  const productFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'brand', label: 'Brand', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'flavor', label: 'Flavor', type: 'text' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <h1>Product Create</h1>

      {productFields.map(field => (
        <Fragment key={field.name}>
          <label>
            {field.label}
          </label>
          <input
            required
            type={field.type}
            value={product[field.name]}
            onChange={(event) => handleUpdate(event.target.value, field.name)}
          />
        </Fragment>
      ))}


      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

PageProductsCreate.propTypes = {
  createProduct: PropTypes.func,
}

PageProductsCreate.defaultProps = {
  createProduct: (product) => {
    console.log('test submit product:', product)
  },
}

export default PageProductsCreate
