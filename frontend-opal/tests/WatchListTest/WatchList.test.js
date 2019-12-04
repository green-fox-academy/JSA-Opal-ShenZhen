import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers/root';
import WatchList from 'components/WatchList/WatchList/WatchList';

describe('<WatchList />', () => {
  it('renders correctly', () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
    const tree = renderer
      .create(
        <Provider store={store}>
          <WatchList />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
