export const urlConst = {
  API_BASE_URL: 'https://json-server-theta.herokuapp.com',
  // API_BASE_URL: 'http://localhost:4000',

  PRODUCTS: '/products',
  REVIEWS: '/reviews',
  FAQS: '/faqs',
  ORDERS: '/orders',
  WISHLIST: '/wishlist',
  CARTS: '/carts',
  USERS: '/users',
  ADDRESSES: '/addresses',
}

export const actionConst = {
  LOADING_DATA: 'LOADING_DATA',
  RESET: 'RESET',

  // alert
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  CLEAR: 'CLEAR',

  // users
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  // GET_USER_BY_ID: 'GET_USER_BY_ID',
  ADD_NEW_USER: 'ADD_NEW_USER',
  CHANGE_DEFAULT_ADDRESS: 'CHANGE_DEFAULT_ADDRESS',

  // products
  PRODUCT_REQUEST: 'PRODUCT_REQUEST',
  GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
  GET_TRENDING_PRODUCTS_MEN: 'GET_TRENDING_PRODUCTS_MEN',
  GET_TRENDING_PRODUCTS_WOMEN: 'GET_TRENDING_PRODUCTS_WOMEN',
  GET_TRENDING_PRODUCTS_KIDS: 'GET_TRENDING_PRODUCTS_KIDS',
  GET_TOP_OFFERS_PRODUCTS: 'GET_TOP_OFFERS_PRODUCTS',

  // address
  ADDRESS_REQUEST: 'ADDRESS_REQUEST',
  GET_ADDRESSES_BY_USER: 'GET_ADDRESSES_BY_USER',
  ADD_ADDRESS: 'ADD_ADDRESS',
  EDIT_ADDRESS: 'EDIT_ADDRESS',

  // order
  ORDER_REQUEST: 'ORDER_REQUEST',
  GET_ORDERS_BY_USER: 'GET_ORDERS_BY_USER',
  PLACE_ORDER: 'PLACE_ORDER',

  // order
  WISHLIST_REQUEST: 'WISHLIST_REQUEST',
  GET_WISHLIST_BY_USER: 'GET_WISHLIST_BY_USER',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',

  // cart
  CART_REQUEST: 'CART_REQUEST',
  GET_CART_BY_USER: 'GET_CART_BY_USER',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QTY: 'UPDATE_CART_QTY',
}

// export const orderStatusConst: { string: string } = {
//   '1': 'Order Placed',
//   '2': 'Shipped',
//   '3': 'Out For Delivery',
//   '4': 'Delivered',
// }
