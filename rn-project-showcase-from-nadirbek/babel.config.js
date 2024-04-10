module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    'module:react-native-reanimated/plugin', //Make sure to list react-native-reanimated/plugin last
  ],
};
