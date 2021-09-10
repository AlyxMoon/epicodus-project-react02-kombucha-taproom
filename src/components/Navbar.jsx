import PropTypes from 'prop-types'

import {
  PAGE_HOME,
  PAGE_PRODUCTS_CREATE,
  PAGE_PRODUCTS_LIST,
} from '../views'

const Navbar = ({ activePage, changePage }) => {
  const links = [
    { 
      text: 'Home', 
      url: '/',
      index: PAGE_HOME,
      handler: (event) => {
        event.preventDefault()
        changePage(PAGE_HOME) 
      },
    },
    { 
      text: 'Product List', 
      url: '/products',
      index: PAGE_PRODUCTS_LIST,
      handler: (event) => {
        event.preventDefault()
        changePage(PAGE_PRODUCTS_LIST) 
      },
    },
    { 
      text: 'Create Product',
      url: '/products/create',
      index: PAGE_PRODUCTS_CREATE,
      handler: (event) => {
        event.preventDefault()
        changePage(PAGE_PRODUCTS_CREATE) 
      },
    },
  ]

  return (
    <nav>
      <div className="container">
        <h1>Kombucha Taproom</h1>

        <ul>
        {links.map((link) => (
          <li key={link.index}>
            <a 
              className={`nav-link ${activePage === link.index ? 'active' : ''}`}
              href={link.url}
              onClick={link.handler}
            >
              {link.text}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  activePage: PropTypes.number,
  changePage: PropTypes.func,
}

Navbar.defaultProps = {
  activePage: -1,
  changePage: (page) => {
    console.log('test change page:', page)
  },
}

export default Navbar

