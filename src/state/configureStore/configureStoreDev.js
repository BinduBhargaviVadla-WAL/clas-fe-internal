import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { setIsLoggedIn } from '../ducks/login/reducer';
import { createHashHistory } from 'history';
import {
  routerMiddleware,
  routerActions,
  connectRouter,
} from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';

const history = createHashHistory();
//combine Reducers
const reducers = combineReducers({
  router: connectRouter(history),
  isLogin: setIsLoggedIn,
});

const middleware = [];
const enhancer = [];
//Thunk middleware setup
middleware.push(thunk);
// Logging Middleware setUp
const logger = createLogger({
  level: 'info',
  collapsed: true,
});
middleware.push(logger);
// Router Middleware
const router = routerMiddleware(history);
middleware.push(router);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer.push(applyMiddleware(...middleware));
const enhancerCompose = composeEnhancers(...enhancer);
const store = configureStore({
  reducer: reducers,
  enhancerCompose,
});
export default store;

// const configureStore = (initialState) => {
//   //Redux middlewares
//   const middleware = [];
//   const enhancer = [];

//   //Thunk middleware setUp
//   middleware.push(thunk);

//   // Logging Middleware setUp
//   const logger = createLogger({
//     level: 'info',
//     collapsed: true,
//   });
//   middleware.push(logger);
//   // Router Middleware
//   const router = routerMiddleware(history);
//   middleware.push(router);
//   //combine Reducers
//   const reducers = combineReducers({
//     router: connectRouter(history),
//     isLogin: setIsLoggedIn,
//   });
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer.push(applyMiddleware(...middleware));
//   const enhancerCompose = composeEnhancers(...enhancer);
//   const store = configureStore({
//     reducer: reducers,
//     enhancerCompose,
//   });
//   return store;
// };
// export default { configureStore, history };
