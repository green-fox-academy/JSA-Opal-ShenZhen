import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Search from 'container/SearchResult/ResultList';
import MainEntry from './MainEntry';
import Portfolio from './PortfolioContainer';
import Watchlist from './WatchList';
import TabbedComponents from './common/TabbedComponents';
import headers from './common/headers';
import InstrumentDetail from './InstrumentDetail';

const InvestmentMain = () => {
  return <TabbedComponents components={[Portfolio, Watchlist]} />;
};
headers.addListHeader(InvestmentMain, 'Investments');

const Investment = createStackNavigator(
  {
    MainEntry,
    InvestmentMain,
    InstrumentDetail,
    Search
  },
  {
    initialRouteName: 'MainEntry',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(77,119,245)'
      }
    }
  }
);

export default createAppContainer(Investment);
