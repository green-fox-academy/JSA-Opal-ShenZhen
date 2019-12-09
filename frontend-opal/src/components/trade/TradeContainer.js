import React from 'react';
import { Content, Text, View} from 'native-base';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import TabbedComponents from './TabbedComponents';

let outname;

const TradeContainer = ({name}) => {
  outname = name;
  return (
    <Content>
      <TabbedComponents />
    </Content>
  );
};

TradeContainer.navigationOptions = ({navigation}) => {
  return{
  headerTitle: () => <Text style={{ color: 'white' }}>Trade({navigation.getParam(null, outname)})</Text>,
  headerBackImage: () => <Icon name="md-arrow-back" style={{ color: 'white' }} />
}
}

const mapStateToProps = state => {
  return({
  name: state.trade.name
})}

export default connect(mapStateToProps, null)(TradeContainer);