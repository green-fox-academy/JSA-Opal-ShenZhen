import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryLegend, VictoryPie } from 'victory-native';

const PieChart = ({ data, color, legendData }) => {
    return (
      <View 
        style={{display: "flex", flexDirection: "row", justifyContent: "space-around", }}
      >
        <Svg
          width={150}
          height={50} 
          style={{border: "1 px solid #ccc"}}
        > 
          <VictoryLegend
            colorScale={color}
            x={30}
            y={40}
                    // gutter={20}
                    // centerTitle
            data={legendData}
            responsive={false}
          />
        </Svg>

        {/* <Svg width={220} height={220} 
              style={{border: "1 px solid #ccc"}}
            >  */}
        <VictoryPie 
                // standalone={false}
          data={data}
          width={180}
          height={200}
          padding={{ left: 20, bottom: 20, top: 20 }}
          colorScale={color}
          labelRadius={() => 24 + 5}
          style={{labels: {fill: "white"}}}
          responsive={false}
        />
        {/* </Svg> */}

      </View>
    )
}

PieChart.propTypes = {
  data: PropTypes.instanceOf(object).isRequired,
  color: PropTypes.instanceOf(array).isRequired,
  legendData: PropTypes.instanceOf(object).isRequired
}

export default PieChart;
