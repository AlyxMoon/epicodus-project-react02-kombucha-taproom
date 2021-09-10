import { Component } from 'react'
import views from './views'

import * as api from './lib/api'

class App extends Component {
  constructor () {
    super()

    this.state = {
      products: [],
    }
  }

  async componentDidMount () {
    const products = await api.getProducts()
    this.setState({
      products,
    })
  }

  addProduct = (product) => {
    this.setState({
      products: [
        ...this.state.products,
        product,
      ],
    }, () => {
      api.updateProducts(this.state.products)
      console.log('product list updated', this.state.products)
    })
  }

  render () {
    return (
      <div className="app">
        <h1>Kombucha Taproom</h1>

        {views.map((View, i) => (
          <View 
            key={i} 
            createProduct={this.addProduct}
            products={this.state.products}
          />
        ))}
      </div>
    )
  }
}

export default App
