import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers/root';

import WatchListItem from 'components/WatchList/WatchListItem/WatchListItem';
import presetProps from 'components/WatchList/presetProps';

describe('<WatchListItem />', () => {
  it('renders correctly', () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
    const info = {
      index: 0,
      data: [presetProps.defaultQuote]
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <WatchListItem data={info.data} index={0} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
