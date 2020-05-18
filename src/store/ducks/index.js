import {combineReducers} from 'redux';

import product from './product';
import cart from './cart';

const reducers = combineReducers({
  product,
  cart,
});

export default reducers;
