import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Card, CardItem, Button, Spinner } from 'native-base';
import styles from './styles';

import PieChart from '../PieChart';

const AllocationInfo = ({ pieData, pieColor, legendData }) => {
  return (
    <CardItem>
      <View style={styles.allocationArea}>
        <Card transparent>
          <Text style={styles.title}>Allocation</Text>
        </Card>

        <Card>
          <View style={styles.pie}>
            {!pieData[0] ? (
              <View
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Spinner color="#e17055" />
              </View>
            ) : (
              <PieChart data={pieData} color={pieColor} legendData={legendData} />
            )}
          </View>

          <View style={styles.allocationButtons}>
            <Button style={styles.button}>
              <Text>SECTOR</Text>
            </Button>
            <Button style={styles.button}>
              <Text>GEOGRAPHY</Text>
            </Button>
          </View>
        </Card>
      </View>
    </CardItem>
  );
};

export default AllocationInfo;

AllocationInfo.defaultProps = {
  pieData: [],
  pieColor: [],
  legendData: []
};

AllocationInfo.propTypes = {
  pieData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      x: PropTypes.string,
      y: PropTypes.number
    })
  ),
  pieColor: PropTypes.arrayOf(PropTypes.string),
  legendData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.objectOf(PropTypes.string)
    })
  )
};
