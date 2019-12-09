import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
/* eslint-disable import/no-extraneous-dependencies */
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
/* eslint-disable import/no-extraneous-dependencies */
import RobotoFont from 'native-base/Fonts/Roboto.ttf';
import RobotoMediumFont from 'native-base/Fonts/Roboto_medium.ttf';

import reducers from 'reducers/root';
import WatchListContainer from 'components/WatchList/';
import Investment from './src/components/investment';

import InstrumentDetail from './src/components/PortfolioContainer/InstrumentDetail';
import LineChart from './src/components/PortfolioContainer/LineChart';
import TradeContainer from './src/components/trade/TradeContainer';

export default function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  const [ready, setReady] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Roboto: RobotoFont,
      Roboto_medium: RobotoMediumFont,
      ...Ionicons.font,
      ...MaterialIcons.font
    });
    setReady(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <>
      {ready ? (
        <Provider store={store}>
          <Investment />
        </Provider>
      ) : (
        <AppLoading />
      )}
    </>
  );
}
