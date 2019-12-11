module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv'
    ],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src',
              rootPathPrefix: '~/'
            },
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: 'components/'
            },
            {
              rootPathSuffix: './src/actions',
              rootPathPrefix: 'actions/'
            },
            {
              rootPathSuffix: './src/reducers',
              rootPathPrefix: 'reducers/'
            },
            {
              rootPathSuffix: './assets',
              rootPathPrefix: 'assets/'
            },
            {
              rootPathSuffix: './src/thunks',
              rootPathPrefix: 'thunks/'
            },
            {
              rootPathSuffix: './src/container',
              rootPathPrefix: 'container/'
            }
          ]
        }
      ]
    ]
  };
};
