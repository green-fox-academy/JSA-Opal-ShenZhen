import React from 'react';
import { View } from 'react-native';
import { Content, Card, Text, Spinner } from 'native-base';

import presetProps from 'components/InstrumentDetail/presetProps';
import StatisticDetail from './StatisticDetail';
import DetailFooter from './DetailFooter';
import styles from '../styles';

const DetailCard = ({ apiData }) => {
  const getDataGroup = (data, groupNum) => data.filter(item => item.group === groupNum);

  return (
    <View>
      <Content padder style={styles.secondCard}>
        <Card transparent>
          <Text style={styles.title}>Details</Text>
        </Card>

        <Card>
          <View style={styles.detail}>
            {apiData.length === 0 ? (
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spinner color="#e17055" />
              </View>
            ) : (
              <>
                <StatisticDetail data={getDataGroup(apiData, 1)} />
                <StatisticDetail data={getDataGroup(apiData, 2)} />
              </>
            )}
          </View>

          <DetailFooter />
        </Card>
      </Content>
    </View>
  );
};

DetailCard.defaultProps = {
  apiData: []
};

DetailCard.propTypes = {
  apiData: presetProps.detailDataTypes
};

export default DetailCard;
