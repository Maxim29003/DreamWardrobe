module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@ui': './src/components/ui',
          '@components': './src/components',
          '@configs': './src/config',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@layouts': './src/layouts',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@styles': './src/styles',
          '@types': './srs/types',
          '@utils': './src/utils',
          '@app': './src/App',
        },
      },
      'react-native-worklets/plugin',
    ],
  ],
};
