import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainEntry from './MainEntry';
import Search from './SearchResult/Result';
import Portfolio from './PortfolioContainer';
import Watchlist from './WatchList';
import AddTabs from './common/AddTabs';
import headers from './common/headers';

const InvestmentMain = () => {
  return <AddTabs Cmpnts={[Portfolio, Watchlist]} names={['PORTFOLIO', 'WATCHLIST']} />;
};
headers.addListHeader(InvestmentMain, 'Investments');

const Investment = createStackNavigator(
  {
    MainEntry,
    InvestmentMain,
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
