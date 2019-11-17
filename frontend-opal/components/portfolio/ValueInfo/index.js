import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

const Value = (props) => {
    return (

        <View style={styles.valueArea}>
            <Text style={styles.title}>Value</Text>

            <Card>
                <View style={styles.investment}>
                    <Text style={styles.name}>Total Investment</Text>
                    <Text style={styles.amount}>$ {props.totalInvestment}</Text>
                </View>

                <TouchableOpacity onPress={() => console.log('button pressed')}>
                    <Text style={styles.button}>INVESTMENT ACCOUNT</Text>
                </TouchableOpacity>

            </Card>
        </View>
    )
}

export default Value;