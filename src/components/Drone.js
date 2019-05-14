import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import Plot from 'react-plotly.js';
import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

const styles = {
    card: {
        margin: "5% 25%"
    },
    cardContent: {
        margin: '0 auto'
    }
};

class Drone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            watchStarted: false
        }
    }

    componentDidMount() {
        this.props.onLoad();
        this.setState({
            isLoading: this.props.loading
        })
    }

    componentDidUpdate() {
        if (!this.state.watchStarted) {
            setInterval(()=> {
                this.props.onLoad();
            }, 3500);
            this.setState({
                watchStarted: true
            })
        }
    }

    renderPlot() {
        const {data} = this.props;
        if (!data.length) return null;
        console.log(data);
        const temperatures = data.map(entry => entry['metric']);
        const TimeStampHourly = data.map(entry => new Date(entry['timestamp']).getHours());
        console.log(TimeStampHourly);
        return <Plot
            data={[
                {
                    x: TimeStampHourly.length,
                    y: temperatures,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'blue'},
                }
            ]}
            layout={{height: 500, title: 'Drone Temperature'}}
        />
    }

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    {!this.state.isLoading && this.renderPlot()}
                </CardContent>
            </Card>
        );
    }
}

const mapState = (state) => {
    const {
        data,
        loading
    } = state.drone;
    return {
        data,
        loading
    };
};

const mapDispatch = dispatch => ({
    onLoad: () =>
        dispatch({
            type: actions.FETCH_DRONE_DATA
        })
});

export default withStyles(styles)(connect(
    mapState,
    mapDispatch
)(Drone));
