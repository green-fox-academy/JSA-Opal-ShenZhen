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
    const info = {
      item: '',
      data: [presetProps.defaultQuote]
    };
    const tree = renderer.create(<WatchListItem item={info.item} data={info.data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
