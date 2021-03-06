import React from 'react';
import { Content, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TabbedComponents from './TabbedComponents';

let outname;

const TradeContainer = ({ name }) => {
  outname = name;
  return (
    <Content>
      <TabbedComponents />
    </Content>
  );
};

TradeContainer.defaultProps = {
  name: ''
};

TradeContainer.propTypes = {
  name: PropTypes.string
};

TradeContainer.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => (
      <Text style={{ color: 'white' }}>
        {navigation.getParam('detailTitle') !== ''
          ? `Trade(${navigation.getParam('detailTitle')})`
          : `Trade(${navigation.getParam(null, outname)})`}
      </Text>
    ),
    headerBackImage: () => <Icon name="md-arrow-back" style={{ color: 'white' }} />
  };
};

const mapStateToProps = state => {
  return {
    name: state.trade.name
  };
};

export default connect(mapStateToProps, null)(TradeContainer);
