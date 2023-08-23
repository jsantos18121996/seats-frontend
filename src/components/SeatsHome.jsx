import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPeriod, selectTerrain, savePeriodsAndTerrains, getSeats } from '../actions/seatsActions';
import Navbar from "./Navbar";

class SeatsHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            periods: null,
            terrains: null,
            period: null,
            terrain: null
        }
    }

    componentDidMount = () => {
        //this.props.getSeats(null);//llamado al api general
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, { selectPeriod, selectTerrain, savePeriodsAndTerrains, getSeats })(SeatsHome);