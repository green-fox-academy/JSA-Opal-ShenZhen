import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainEntry from './MainEntry';
import Portfolio from './PortfolioContainer';
import Search from './SearchResult/Result';

const Investment = createStackNavigator(
  {
    MainEntry,
    Portfolio,
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
