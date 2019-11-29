import { StyleSheet } from 'react-native';

function doFlexDisplay(direction, justify) {
  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify
  };
}

export default StyleSheet.create({
  firstCard: {},
  secondCard: {},
  title: {
    color: 'grey',
    fontSize: 24
  },
  chart: {
    backgroundColor: '#DFF1FD'
  },
  detail: {
    ...doFlexDisplay('row', 'space-evenly'),
    height: 200,

    backgroundColor: '#DFF1FD'
  },
  detailSection: {
    width: '43%'
  },
  detailItem: {
    ...doFlexDisplay('row', 'space-between'),
    marginTop: 4
  },
  itemTitle: {
    color: 'grey',
    fontSize: 13
  },
  itemText: {
    color: 'grey',
    fontSize: 15
  },
  chartFooter: {
    ...doFlexDisplay('row', 'space-around')
  },
  footerText: {
    color: 'black'
  },
  detailFooter: {
    ...doFlexDisplay('row', 'space-around')
  }
});
