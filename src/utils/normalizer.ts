import { Dimensions } from 'react-native';

const Window = Dimensions.get('window');
const Screen = Dimensions.get('screen');
const WIDTH = Window.width;
const HEIGHT = Window.height;
const FONT_SCALE = Window.fontScale;
const SCREEN_SCALE = Window.scale;

const isSmallWidth = WIDTH < 330;
const isLargeWidth = WIDTH > 768;


const calculateNumColumns = ():number => {
  if (WIDTH < 330) {
    return 1; 
  } else if (WIDTH <= 768) {
    return 2; 
  } else {
    return 3;
  }
};


const figmaConverter = (size: number): number => (size / 411) * WIDTH;

export {
  Window,
  WIDTH,
  HEIGHT,
  isSmallWidth,
  isLargeWidth,
  FONT_SCALE,
  SCREEN_SCALE,
  Screen,
  figmaConverter,
  calculateNumColumns,
};
