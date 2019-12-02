import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  navBars: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navTitle: {
    padding: 2,
    width: '50%',
    height: 50,
    textAlign: 'center',
    fontSize: 12
  },
  buttonPressed: {
    borderBottomWidth: 1,
    borderBottomColor: '#e17055'
  }
});
