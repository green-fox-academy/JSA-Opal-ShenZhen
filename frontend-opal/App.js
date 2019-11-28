import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers/root';
import Investment from './src/components/investment';

import InstrumentDetail from './src/components/PortfolioContainer/InstrumentDetail';

export default function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      {/* <Investment /> */}
      <InstrumentDetail />
    </Provider>
  );
}
