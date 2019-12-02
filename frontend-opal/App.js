import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import reducers from 'reducers/root';
import WatchListContainer from 'components/WatchList/';
import Investment from './src/components/investment';

export default function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  

  return ( 
        <Provider store={store}>
          <WatchListContainer />
          
        </Provider>
  );
}