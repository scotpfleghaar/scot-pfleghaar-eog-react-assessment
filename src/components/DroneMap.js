import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import {withStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const styles = {
    card: {
        margin: "5% 25%"
    },
    cardContent: {
        margin: '0 auto'
    }
};

class DroneMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            watchStarted: false,
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
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
        const {classes} = this.props;
        const { latitude, longitude } = this.props.data[0];
        console.log(this.props.data[0]);
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <div style={{ height: '100%', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: '12345' }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                        >
                            <AnyReactComponent
                                lat={41.11001}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
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
)(DroneMap));
