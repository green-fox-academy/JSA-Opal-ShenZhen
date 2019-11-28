import { StyleSheet } from 'react-native';

function doFlexDisplay(direction, justify) {
  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify
  };
}

export default StyleSheet.create({
  firstCard: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'green'
  },
  secondCard: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  title : {
      color: "grey",
      fontSize: 24,
  },
  body : {
      backgroundColor: "green",
      opacity : 0.1,
      height: 300,
  },
  chart: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'yellow',
    width: "100%",
    height: "50%",
  },
  statisticDetail: {
    ...doFlexDisplay('row', 'space-evenly'),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'blue'
  },
  detailItem: {
    ...doFlexDisplay('row', 'space-between'),
    // height: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green'
  },
  itemText: {
    color: 'grey'
  },
  chartFooter: {
    ...doFlexDisplay('row', 'space-around')
  },
  detailFooter: {
    ...doFlexDisplay('row', 'space-around')
  }
});
