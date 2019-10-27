import React from 'react';
import ChartView from './ChartView';
import {fetchData} from '../utils/fetchData';

class DataVisualApp extends React.Component{
    state = {
        series: 1,
        maxSeries:3,
        data: [],
        signal: []
    }

    fetchDataSignal = ()=>{
        fetchData(this.state.series)
        .then(({data, signal})=> this.setState({data, signal}))
        .catch(()=>alert('Oops! Somthing went wrong. Please try after somtime.'))
    }

    componentDidMount = ()=>this.fetchDataSignal();

    onPrevClick = ()=>{
        this.setState({series: this.state.series -1}, ()=>{
            this.fetchDataSignal();
        })
    }
    onNextClick = ()=>{
        this.setState({series: this.state.series +1 }, ()=>{
            this.fetchDataSignal();
        })
    }
    render(){
        return(
            <React.Fragment>
            <div className="chartContainer">
                {
                    this.state.data.length > 0 && 
                    <ChartView 
                        series={this.state.series} 
                        dataSet={this.state.data}
                        ticks = {[0, 3, 6, 9, 12]}
                    />
                }
                {
                    this.state.signal.length > 0 && 
                    <ChartView 
                        series={this.state.series} 
                        dataSet={this.state.signal}
                        ticks = {[0, 1.2]}
                        dataSetName = {`Series ${this.state.series}`}
                    />
                }
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={this.onPrevClick} disabled={this.state.series <=1}>{`<`}</button>
                    <button className="button" onClick={this.onNextClick} disabled={this.state.series === this.state.maxSeries }>{`>`}</button>
                </div>
                </React.Fragment>
            
        );
    }
}

export default DataVisualApp;