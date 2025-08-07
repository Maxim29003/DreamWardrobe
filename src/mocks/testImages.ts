export const blueImage = require('@assets/img/blue.jpg');
export const pinkImage = require('@assets/img/pink.jpg');
export const blackImage = require('@assets/img/black.jpg');
export const orangeImage = require('@assets/img/orange.jpg');
export const grayImage = require('@assets/img/gray.jpg');

export const DATA = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1),
  title: `Item ${index + 1}`,
}));

export type Size = {
  id: string;
  label: string;
};

export const sizes: Size[] = [
  { id: '1', label: 'S' },
  { id: '2', label: 'M' },
  { id: '3', label: 'L' },
  { id: '4', label: 'XL' },
];

export type Color = {
  id: string;
  name: string;
};

export const colors: Color[] = [
  { id: '3', name: 'blue' },
  { id: '4', name: 'orange' },
  { id: '5', name: 'green' },

  { id: '7', name: 'pink' },
  { id: '8', name: 'black' },
];
