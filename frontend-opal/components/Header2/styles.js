import { StyleSheet } from 'react-native';

const displayBorder = (width = 2, style = 'solid', color = 'black') => (
  {
    borderWidth: width,
    borderStyle: style,
    borderColor: color,
  }
);

export default StyleSheet.create({
/* ------------------------ Search Area ------------------------
    - a list icon,
    - an search input
    - a search button
------------------------------------------------------------------ */
  search: {
    // Display & Box Model
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // ...displayBorder(3, "solid", "#74b9ff"),
    width: '100%',
    height: 50,
    alignContent: 'center',

    // Other
    backgroundColor: '#0984e3',
  },
  listIcon: {
    // Position
    marginTop: 14,
    marginLeft: 20,

    // Display & Box Model
    // ...displayBorder(2, "solid", "#ff7675"),
    width: 25,
    height: 25,

  },
  input: {
    // Position
    marginTop: 10,
    color: 'white',
    fontSize: 24,
  },
  searchButton: {
    // Position
    marginTop: 14,
    marginRight: 20,

    // Display & Box Model
    // ...displayBorder(2, "solid", "#fdcb6e"),
    width: 25,
    height: 25,
  },

  /* ------------------------ Navigation Area ------------------------
    - a portfolio link
    - a watch list link
------------------------------------------------------------------ */
  navBars: {
    // Display & Box Model
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // ...displayBorder(2, "solid", "#00cec9"),

  },
  narTitle: {
    // Display & Box Model
    padding: 2,
    // ...displayBorder(2, "solid", "#636e72"),
    width: '50%',
    height: 40,
    textAlign: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: "#e17055",

    // Other
    fontSize: 12,
  },
});
