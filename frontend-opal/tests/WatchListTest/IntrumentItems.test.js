import React from 'react';
import renderer from 'react-test-renderer';

import InstrumentItems from '../../components/InstrumentItems/instrumentItems';

describe('<InstrumentItems />', () => {
  it('renders correctly', () => {
    const info = [{
      name: 'MSFT', num: '141.21', increase: '+0.23', whole: '1.2M',
    },
    {
      name: 'AMZN', num: '2108.2', increase: '-0.06', whole: '609K',
    },
    {
      name: 'AAPL', num: '250.7', increase: '+1.63', whole: '810K',
    }];
    const tree = renderer.create(<InstrumentItems infos={info} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
