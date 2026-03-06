module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/(?!react-native-extended-stylesheet|@react-native/js-polyfills|react-native|redux-persist|@react-native/assets-registry|@react-native-masked-view|@react-native/virtualized-lists|@invertase/react-native-apple-authentication|native-modules/react-native-ble|@react-native-community/datetimepicker|@react-navigation)', // Adicionado datetimepicker
  ],
};
