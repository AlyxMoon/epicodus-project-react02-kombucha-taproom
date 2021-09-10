import { useState } from 'react'
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
      [property]: value,
    })
  }

  const productFields = [
    { name: 'name', label: 'Name' },
    { name: 'brand', label: 'Brand' },
    { name: 'price', label: 'Price' },
    { name: 'flavor', label: 'Flavor' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <h1>Product Create</h1>

      {productFields.map(field => (
        <>
          <label key={`label-${field.name}`}>
            {field.label}
          </label>
          <input
            key={`name-${field.name}`}
            value={product[field.name]}
            onChange={(event) => handleUpdate(event.target.value, field.name)}
          />
        </>
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
