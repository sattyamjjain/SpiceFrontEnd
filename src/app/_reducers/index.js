import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer.js';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { product } from './product.reducer';
import { wishlist } from './wishlist.reducer';
import { productReview } from './productReview.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  productReview,
  product,
  wishlist,
  users
});

export default rootReducer;