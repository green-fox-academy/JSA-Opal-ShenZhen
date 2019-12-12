import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  instrumentsArea: {
    width: '100%'
  },
  title: {
    fontSize: 24
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profileImgContainer: {
    width: 40,
    height: 40
  },
  profileImg: {
    width: '100%',
    height: '100%'
  },
  profileText: {
    marginLeft: 10
  },
  stockExchange: {
    color: '#B2B2B2'
  },
  instruments: {
    backgroundColor: '#DFF1FD',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  },
  instrumentDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  instrumentDetailText: {
    fontSize: 16
  },
  instrumentDetailTextGreen: {
    color: '#5FC748'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  },
  button: {
    width: 100,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgb(247,247,247)',
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
});
