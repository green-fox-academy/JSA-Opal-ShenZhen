import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignContent: 'center'
  },
  linechart: {
    width: 200
  },
  chartinfo: {
    marginTop: '15%'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 20
  },
  greenfont: {
    color: 'green',
    flex: 1
  },
  redfont: {
    color: 'red',
    flex: 1
  },
  icon: {
    width: 14,
    height: 14
  },
  border: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1
  }
});
