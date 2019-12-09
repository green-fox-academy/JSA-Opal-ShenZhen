import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  border: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addNew: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 15,
    bottom: 15,
    backgroundColor: '#e17055',
    borderRadius: 50 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonOK: {
    backgroundColor: 'rgb(77,119,245)'
  },
  buttonText: {
    color: 'white'
  }
});
