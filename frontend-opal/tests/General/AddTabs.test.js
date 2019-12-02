import React from 'react';
import renderer from 'react-test-renderer';

import TabbedComponents from 'components/common/TabbedComponents';

function TestComponent() {
  return <></>;
}

describe('<TabbedComponents />', () => {
  it('renders correctly', () => {
    TestComponent.title = 'test';
    const tree = renderer
      .create(<TabbedComponents components={[TestComponent, TestComponent]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
