import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

import PieChart from '../PieChart'

const AllocationInfo = (props) => {
    return (
        <View style={styles.allocationArea}>
            <Text style={styles.title}>Allocation</Text>

            <Card>
                <View style={styles.pie}>
                    <PieChart
                        data={props.pieData}
                        color={props.pieColor}
                        legendData={props.legendData}
                    />
                </View>

                <View style={styles.allocationButtons}>
                    <TouchableOpacity onPress={() => console.log('button pressed')}>
                        <Text style={styles.button}>SECTOR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('button pressed')}>
                        <Text style={styles.button}>GEOGRAPHY</Text>
                    </TouchableOpacity>
                </View>

            </Card>
        </View>
    )
}

export default AllocationInfo;

