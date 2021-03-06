import _PageHome from './Home'
import _PageProductsCreate from './ProductsCreate'
import _PageProductsDetails from './ProductsDetails'
import _PageProductsList from './ProductsList'

const views = [
  _PageHome,
  _PageProductsCreate,
  _PageProductsDetails,
  _PageProductsList,
]

export default views
export const PageHome = _PageHome
export const PageProductsCreate = _PageProductsCreate
export const PageProductsDetails = _PageProductsDetails
export const PageProductsList = _PageProductsList

export const PAGE_HOME = 0
export const PAGE_PRODUCTS_CREATE = 1
export const PAGE_PRODUCTS_DETAILS = 2
export const PAGE_PRODUCTS_LIST = 3
