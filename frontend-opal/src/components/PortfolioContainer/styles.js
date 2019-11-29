import { StyleSheet } from 'react-native';
import tools from 'components/common/tools';

export default StyleSheet.create({
  portfolioArea: {
    alignItems: 'center'
  },
  listIcon: {
    marginLeft: tools.getPixel(20),
    width: tools.getPixel(20),
    height: tools.getPixel(20)
  },
  searchButton: {
    marginTop: 14,
    marginRight: 20,
    width: 25,
    height: 25
  }
});
