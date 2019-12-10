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
  secondCard: {
    marginTop: -30
  },
  title: {
    color: 'grey',
    fontSize: 24
  },
  chart: {
    backgroundColor: '#DFF1FD'
  },
  detail: {
    ...doFlexDisplay('row', 'space-evenly'),
    height: 180,

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
    ...doFlexDisplay('row', 'space-around'),
    height: 45
  },
  footerText: {
    color: 'black'
  },
  detailFooter: {
    ...doFlexDisplay('row', 'flex-end'),
    height: 45
  }
});
