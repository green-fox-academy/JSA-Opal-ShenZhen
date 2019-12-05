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
  chartGraph: {
    marginLeft: tools.getPixel(-20),
    width: '64%'
  },
  chartinfo: {
    marginTop: '15%',
    width: '36%',
    marginRight: tools.getPixel(10)
  },
  lineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignRight: {
    width: '35%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  alignLeft: {
    width: '65%',
    display: 'flex',
    alignItems: 'flex-start'
  }
});
