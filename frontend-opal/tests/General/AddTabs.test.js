import React from 'react';
import renderer from 'react-test-renderer';

import AddTabs from 'components/common/AddTabs';

function TestComponent() {
  return <></>;
}

describe('<AddTabs />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AddTabs Cmpnts={[TestComponent, TestComponent]} names={['PORTFOLIO', 'WATCHLIST']} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
