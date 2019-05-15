import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import DroneTemperatureGraph from "./DroneTemperatureGraph";
import DroneMap from "./DroneMap";
import Dashboard from "./Dashboard";
import CardHeaderRaw from "@material-ui/core/CardHeader/CardHeader";

const styles = {
    card: {
        margin: "5% 25%"
    },
    cardContent: {
        height: '500px',
        width: '100%'
    }
};

const cardStyles = theme => ({
    root: {
        background: theme.palette.primary.main
    },
    title: {
        color: "white"
    }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

export class LiveDataWrapper extends Component {
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
            setInterval(() => {
                this.props.onLoad();
            }, 3500);
            this.setState({
                watchStarted: true
            })
        }
    }

    render() {
        const {data, classes} = this.props;
        if (!data[0]) return null;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader title="Dashboard" />
                    <CardContent className={classes.cardContent}>
                        <Dashboard data={data}/>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardHeader title="Temperature Graph" />
                    <CardContent className={classes.cardContent}>
                        <DroneTemperatureGraph data={data}/>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardHeader title="Drone Location" />
                    <CardContent className={classes.cardContent}>
                        <DroneMap data={data}/>
                    </CardContent>
                </Card>
            </div>
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
)(LiveDataWrapper));
