import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainEntry from './MainEntry';
import Search from './SearchResult/Result';
import Portfolio from './PortfolioContainer';
import Watchlist from './WatchList';
import TabbedComponents from './common/TabbedComponents';
import headers from './common/headers';
import InstrumentDetail from './PortfolioContainer/InstrumentDetail';

const InvestmentMain = () => {
  return <TabbedComponents components={[Watchlist, Portfolio]} />;
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
    initialRouteName: 'InvestmentMain',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'rgb(77,119,245)'
      }
    }
  }
);

export default createAppContainer(Investment);
