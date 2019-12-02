import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ScreenWidth = width;

function getPixel(num, designWidth = 375) {
  return num * (ScreenWidth / designWidth);
}

export default {
  getPixel
};
