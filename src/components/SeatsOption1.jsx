import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPeriod, selectTerrain, getSeats } from '../actions/seatsActions';

class SeatsOption1 extends Component {

    constructor(props) {
        super(props);
        console.log('props en constructor !!!!!! ', props);
        this.state = {
            periods: this.props.seats.periods,
            terrains: this.props.seats.terrains,
            period: this.props.seats.period !== null ? this.props.seats.period : null,
            terrain: this.props.seats.terrain !== null ? this.props.seats.terrain : null
        }
    }

    componentDidMount = () => {
        console.log('recuperamos valores del props ', this.props);
        const { period, terrain } = this.props.seats;
        const data = {
            period,
            terrain
        }
        this.props.getSeats(data);
    }

    render() {
        console.log('props in SeatsOption1 ', this.props);
        console.log('state in SeatsOption1 ', this.state);
        return (
            <div>SeatsOption1 !
                <div>
                    <select
                        onChange={e => {
                            const { value } = e.target;
                            this.setState({
                                period: value
                            }, () => this.props.selectPeriod(value))
                        }}
                    >
                        <option>Seleccione un periodo</option>
                        {this.state.periods.map(period => (
                            <option key={period} value={period}>{period}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        onChange={e => {
                            const { value } = e.target;
                            this.setState({
                                terrain: value
                            }, () => this.props.selectTerrain(value))
                        }}
                    >
                        <option>Seleccione un terreno</option>
                        {this.state.terrains.map(terrain => (
                            <option key={terrain} value={terrain}>{terrain}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const { period, terrain } = this.state;
                            const data = {
                                period,
                                terrain
                            }
                            this.props.getSeats(data);
                        }}
                    >Buscar</button>
                </div>
            </div>)
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats })(SeatsOption1);