import { StyleSheet } from 'react-native';

import tools from 'components/common/common';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(77,119,245)',
    elevation: tools.getPixel(10),
    marginTop: tools.getPixel(29),
  },
  searchContainer: {
    width: tools.getPixel(240),
    borderBottomWidth: tools.getPixel(2),
    height: tools.getPixel(30),
  },
});
