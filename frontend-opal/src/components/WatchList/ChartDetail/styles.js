import { StyleSheet } from 'react-native';

import tools from 'components/common/tools';

export default StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignContent: 'center'
  },
  chartinfo: {
    marginTop: '15%',
    width: '38%',
    marginRight: tools.getPixel(10)
  },
  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignRight: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  alignLeft: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start'
  }
});
