import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class ChartView extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
        <ResponsiveContainer
        width="100%"
      >
        <LineChart
            data={this.props.dataSet}
            margin={{top: 5, right: 0, left: 0, bottom: 0}}>
          <XAxis 
            dataKey="x"
            fontFamily="sans-serif"
            tickSize={1}
            dy={5}
          />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={this.props.ticks}
          />
          <CartesianGrid 
            vertical={false}
            stroke="#ebf3f0"
          />
          <Tooltip />
          <Legend payload = {[{ value: this.props.dataSetName, type: 'line', id: 'ID01' }]}/>
          <Line dataKey={`series_${this.props.series}`} stroke="#82ca9d"  dot={true} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
