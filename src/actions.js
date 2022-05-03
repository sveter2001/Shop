/*
 * типы экшенов
 */

export const ADD_PRODUCTS_ALL = 'ADD_PRODUCTS_ALL'


/*
 * генераторы экшенов
 */

export function addProductsAll(products) {
  return { type: ADD_PRODUCTS_ALL, products }
}
