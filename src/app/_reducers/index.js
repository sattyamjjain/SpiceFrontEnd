import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer.js';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { product } from './product.reducer';
import { wishlist } from './wishlist.reducer';
import { cart } from './cart.reducer';
import { productReview } from './productReview.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  productReview,
  product,
  wishlist,
  cart,
  users
});

export default rootReducer;