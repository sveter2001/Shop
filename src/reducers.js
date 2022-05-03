import { combineReducers } from 'redux'
import {
  ADD_PRODUCTS_ALL
} from './actions'

function products(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCTS_ALL:
      return [...action.products]
    default:
      return state
  }
}

const ecomApp = combineReducers({
  products
})

export default ecomApp
