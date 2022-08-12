import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import space from './spaceSlice';

const combineReducer = combineReducers({
  space,
});

export const makeStore = () => configureStore({ reducer: combineReducer });

export const wrapper = createWrapper(makeStore);
