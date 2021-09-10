import { Component } from 'react'

import views from './views'
import * as api from './lib/api'

import Navbar from './components/Navbar'

class App extends Component {
  constructor () {
    super()

    this.state = {
      activePage: 0,
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
              products={this.state.products}
          />
        </main>
      </div>
    )
  }
}

export default App
