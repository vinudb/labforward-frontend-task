import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { x: '1', series_1: 1 },
    { x: '2', series_1: 2 },
    { x: '3', series_1: 8 },
    { x: '4', series_1: 9 },
    { x: '5', series_1: 6 },
    { x: '6', series_1: 4 },
    { x: '7', series_1: 1 },
    { x: '8', series_1: 1 },
    { x: '9', series_1: 1 },
    { x: '10', series_1: 1 },
  ];

export default class ChartView extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
        <ResponsiveContainer
        width="100%"
      >
        <LineChart
            data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 25}}>
          <XAxis 
            dataKey="x"
            fontFamily="sans-serif"
            tickSize
            dy='25'
          />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={[0, 3, 6, 9, 12, 15]}
          />
          <CartesianGrid 
            vertical={true}
            stroke="#ebf3f0"
          />
          <Tooltip />
          <Legend />
          <Line dataKey="series_1" stroke="#82ca9d"  dot={true}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
