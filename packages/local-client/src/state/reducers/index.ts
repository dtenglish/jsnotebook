import { combineReducers } from 'redux';
import bundleReducer from './bundleReducer';
import cellReducer from './cellReducer';

const reducers = combineReducers({
  cells: cellReducer,
  bundles: bundleReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
