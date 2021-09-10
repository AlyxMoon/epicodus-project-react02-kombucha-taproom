import { Component } from 'react'

import views, { PAGE_PRODUCTS_DETAILS } from './views'
import * as api from './lib/api'

import Navbar from './components/Navbar'

class App extends Component {
  constructor () {
    super()

    this.state = {
      activePage: 0,
      activeProduct: {},
      activeProductIndex: -1,
      products: [],
    }
  }

  async componentDidMount () {
    const products = await api.getProducts()
    this.setState({
      products,
    })
  }

  setPage = (page) => {
    this.setState({
      activePage: Math.max(0, Math.min(page, views.length - 1)),
      activeProduct: {},
      activeProductIndex: -1,
    })
  }

  seeProductDetails = (productIndex = -1) => {
    this.setState({
      activePage: PAGE_PRODUCTS_DETAILS,
      activeProduct: productIndex === -1 ? {} : this.state.products[productIndex],
      activeProductIndex: productIndex,
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

  updateActiveProduct = (product) => {
    this.setState({
      activeProduct: product,
      products: [
        ...this.state.products.slice(0, this.state.activeProductIndex),
        product,
        ...this.state.products.slice(this.state.activeProductIndex + 1),
      ],
    }, () => {
      api.updateProducts(this.state.products)
    })
  }

  render () {
    const ActiveView = views[this.state.activePage]

    return (
      <div className="app">
        <Navbar 
          activePage={this.state.activePage}
          changePage={this.setPage}
        />

        <main>
          <ActiveView 
            createProduct={this.addProduct}
            updateProduct={this.updateActiveProduct}
            products={this.state.products}
            product={this.state.activeProduct}
            seeProductDetails={this.seeProductDetails}
          />
        </main>
      </div>
    )
  }
}

export default App
