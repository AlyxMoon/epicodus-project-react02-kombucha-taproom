import { Component } from 'react'

import views, { PAGE_PRODUCTS_DETAILS, PAGE_PRODUCTS_LIST } from './views'
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

  seeProductDetails = (id) => {
    const index = this.state.products.findIndex(product => product.id === id)

    this.setState({
      activePage: PAGE_PRODUCTS_DETAILS,
      activeProduct: index === -1 ? {} : this.state.products[index],
      activeProductIndex: index,
    })
  }

  addProduct = (product) => {
    this.setState({
      products: [
        ...this.state.products,
        product,
      ],
      activePage: PAGE_PRODUCTS_LIST,
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

  removeProduct = (id) => {
    const index = this.state.products.findIndex(product => product.id === id)
    if (index < 0) return

    this.setState({
      activeProduct: {},
      products: [
        ...this.state.products.slice(0, index),
        ...this.state.products.slice(index + 1),
      ],
      activePage: this.state.activePage === PAGE_PRODUCTS_DETAILS
        ? PAGE_PRODUCTS_LIST
        : this.state.activePage,
    }, () => {
      api.updateProducts(this.state.products)
    })
  }

  render () {
    const ActiveView = views[this.state.activePage]

    const featuredProducts = this.state.products.filter(product => {
      return product.pints > 0 && product.pints < 15
    })

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
            removeProduct={this.removeProduct}
            products={this.state.products}
            featuredProducts={featuredProducts}
            product={this.state.activeProduct}
            seeProductDetails={this.seeProductDetails}
          />
        </main>
      </div>
    )
  }
}

export default App
