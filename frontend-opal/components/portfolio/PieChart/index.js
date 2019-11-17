import React from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryLegend, VictoryPie, VictoryTheme } from 'victory-native'

const PieChart = (props) => {
    return (
        <View 
        style={{display: "flex", flexDirection: "row", justifyContent: "space-around", }}
        >
            <Svg width={150} height={50} 
              style={{border: "1 px solid #ccc"}}
            > 
                <VictoryLegend
                    colorScale={props.color}
                    x={30} y={40}
                    // gutter={20}
                    // centerTitle
                    data={props.legendData}
                    responsive={false}
                />
            </Svg>

            {/* <Svg width={220} height={220} 
              style={{border: "1 px solid #ccc"}}
            >  */}
                <VictoryPie 
                // standalone={false}
                    data={props.data}
                    width={180}
                    height={200}
                    padding={{ left: 20, bottom: 20, top: 20 }}
                    colorScale={props.color}
                    // labels={(label) => label.y}
                    labelRadius={({test}) => 24 + 5}
                    style={{labels: {fill: "white"}}}
                    responsive={false}
                />
            {/* </Svg> */}

        </View>
    )
}

export default PieChart;
