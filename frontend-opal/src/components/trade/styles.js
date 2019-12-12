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
    color: 'black',
    fontSize: 24
  },
  chart: {
    backgroundColor: '#DFF1FD'
  },
  detail: {
    height: 200,
    backgroundColor: '#DFF1FD'
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 150
  },
  detailItem: {
    marginTop: 4
  },
  itemTitle: {
    color: 'grey',
    fontSize: 20
  },
  itemData: {
    color: 'black',
    fontSize: 20,
    height: 30,
    width: 200
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
