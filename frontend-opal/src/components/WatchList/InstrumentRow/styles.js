import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  info: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftContainer: {
    width: '20%'
  },
  rightContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignRight: {
    width: '20%',
    display: 'flex',
    alignItems: 'flex-end'
  },
  iconContainer: {
    width: '20%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  greenfont: {
    color: 'green'
  },
  redfont: {
    color: 'red'
  },
  icon: {
    width: 14,
    height: 14
  }
});
