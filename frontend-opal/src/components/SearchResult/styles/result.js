import { StyleSheet } from 'react-native';

import tools from 'components/common/common';

const styles = StyleSheet.create({
  container: {
    paddingLeft: tools.getPixel(22),
    paddingRight: tools.getPixel(22)
  },
  itemContainer: {
    height: tools.getPixel(60),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  firstLineContainer: {
    height: tools.getPixel(20),
    display: 'flex',
    flexDirection: 'row'
  },
  nameContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row'
  },
  name: {
    color: '#717171'
  },
  input: {
    color: '#000000'
  },
  fullName: {
    color: '#717171',
    fontSize: tools.getPixel(14)
  },
  iconContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  infoIcon: {
    width: tools.getPixel(16),
    height: tools.getPixel(16)
  },
  tradeIcon: {
    width: tools.getPixel(16),
    height: tools.getPixel(16)
  }
});

export default styles;
