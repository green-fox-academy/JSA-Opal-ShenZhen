import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './Header';
import PortfolioContainer from './PortfolioContainer';

const Investment = createStackNavigator(
  {
    Home: PortfolioContainer 
  }
)

// export default function Portfolio() {
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Header />
//         <PortfolioContainer />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

export default createAppContainer(Investment);
