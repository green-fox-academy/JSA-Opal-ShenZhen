import React from 'react';
import renderer from 'react-test-renderer';

import ValueInfo from '../components/PortfolioContainer/ValueInfo';

const totalInvestment = "3,400";


describe('<ValueInfo />', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ValueInfo
              totalInvestment={totalInvestment}
            />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});