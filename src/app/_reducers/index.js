import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer.js';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { product } from './product.reducer';
import { productReview } from './productReview.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  productReview,
  product,
  users
});

export default rootReducer;