module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
            }
          ]
        }
      ]
    ]
  };
};
