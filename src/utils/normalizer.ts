import { Dimensions } from 'react-native';

const Window = Dimensions.get('window');
const Screen = Dimensions.get('screen');
const WIDTH = Window.width;
const HEIGHT = Window.height;
const FONT_SCALE = Window.fontScale;
const SCREEN_SCALE = Window.scale;

const isSmallWidth = WIDTH < 330;
const figmaConverter = (size: number): number => (size / 411) * WIDTH;

export {
  Window,
  WIDTH,
  HEIGHT,
  isSmallWidth,
  FONT_SCALE,
  SCREEN_SCALE,
  Screen,
  figmaConverter,
};
