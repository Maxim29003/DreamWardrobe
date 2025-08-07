export const blueImage = require('@assets/img/blue.jpg');
export const pinkImage = require('@assets/img/pink.jpg');
export const blackImage = require('@assets/img/black.jpg');
export const orangeImage = require('@assets/img/orange.jpg');
export const grayImage = require('@assets/img/gray.jpg');

export const DATA = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1),
  title: `Item ${index + 1}`,
}));
