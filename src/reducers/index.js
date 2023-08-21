import { combineReducers } from 'redux';
import seatsReducer from './SeatsReducer';

export default combineReducers({
    seats: seatsReducer
  });