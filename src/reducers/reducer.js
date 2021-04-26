import { combineReducers } from 'redux';
import deezer from './deezer';

const rootReducer = combineReducers({
  deezer,
});

export default rootReducer;