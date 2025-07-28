module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@api": "./src/api",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@configs": "./src/config",
          "@constants": "./src/constants",
          "@helpers": "./src/helpers",
          "@layouts": "./src/layouts",
          "@routes": "./src/routes",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@styles": "./src/styles",
          "@types": "./srs/types",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
