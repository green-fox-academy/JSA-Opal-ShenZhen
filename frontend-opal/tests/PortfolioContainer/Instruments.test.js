import React from 'react';
import renderer from 'react-test-renderer';
import Instruments from '../../src/components/PortfolioContainer/Instruments';

const instrumentsList = [{
  company: 'FB - Facebook Inc.',
  stockExchange: 'NASDAQ',
  /* eslint-disable-next-line */
  profileImg: require('../../src/components/PortfolioContainer/Instruments/images/avatarPlaceholder.png'),
  positions: 136,
  marketValue: 11863.28,
  unrlzedPLPercentage: '4.5%',
  unrlzedPL: 510.86,
}];

describe('<Instruments />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Instruments InstrumentList={instrumentsList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
