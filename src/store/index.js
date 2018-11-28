import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homeReducer} from '../views/Home/store';
import clientFetch from '@/modules/clientFetch';
import serverFetch from '@/modules/serverFetch';

const reducer = combineReducers({
  home: homeReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverFetch)));
};

export const getClientStore = () => {
  // 数据脱水，将window.context拿出来使用
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientFetch)));
};

