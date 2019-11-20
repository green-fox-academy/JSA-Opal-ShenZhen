import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Card } from 'native-base';
import styles from './styles';

function InstrumentsItem({ company, stockExchange,profileImg, positions, marketValue, unrlzedPLPercentage, unrlzedPL }){
    return (
        <View>
            <Card>
                <View style={styles.header}>
                    <View style = {styles.profileImgContainer}>
                        <Image style = {styles.profileImg} source={ profileImg } />
                    </View>
                    <View style = {styles.profileText}>
                        <Text>{ company }</Text>
                        <Text style = {styles.stockExchange}>{ stockExchange }</Text>
                    </View>
                </View>

                <View style={styles.instruments}>
                    <View style={styles.instrumentDetail}>
                        <Text style={styles.instrumentDetailText}>Positions:</Text>
                        <Text style={styles.instrumentDetailText}>{ positions }</Text>
                    </View>
                    <View style={styles.instrumentDetail}>
                        <Text style={styles.instrumentDetailText}>Market Value:</Text>
                        <Text style={styles.instrumentDetailText}>{ marketValue }</Text>
                    </View>
                    <View style={styles.instrumentDetail}>
                        <Text style={styles.instrumentDetailText}>Unrlzd P/L %:</Text>
                        <Text style={[styles.instrumentDetailText, styles.instrumentDetailTextGreen]}>{ unrlzedPLPercentage }</Text>
                    </View>
                    <View style={styles.instrumentDetail}>
                        <Text style={styles.instrumentDetailText}>Unrlzd P/L:</Text>
                        <Text style={[styles.instrumentDetailText, styles.instrumentDetailTextGreen]}>{ unrlzedPL }</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.button}>TRADE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
}

const Instruments = ({ InstrumentList }) => {
    return (
        <SafeAreaView style={styles.instrumentsArea}>
            <Text style={styles.title}>Instruments</Text>

            <FlatList 
                data = {InstrumentList}
                renderItem = {({ item }) => 
                    <InstrumentsItem 
                        company={item.company}
                        stockExchange={item.stockExchange}
                        profileImg={item.profileImg} 
                        positions={item.positions} 
                        marketValue={item.marketValue} 
                        unrlzedPLPercentage={item.unrlzedPLPercentage}
                        unrlzedPL={item.unrlzedPL}
                    />
                }
                keyExtractor={item => item.stockExchange+item.company}
            />
        </SafeAreaView>
    )
}

Instruments.propTypes = {
    InstrumentList: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired, 
            stockExchange: PropTypes.string.isRequired,
            profileImg: PropTypes.any.isRequired, 
            positions: PropTypes.number.isRequired, 
            marketValue: PropTypes.number.isRequired, 
            unrlzedPLPercentage: PropTypes.string.isRequired, 
            unrlzedPL: PropTypes.number.isRequired
        })
    )
}

export default Instruments;