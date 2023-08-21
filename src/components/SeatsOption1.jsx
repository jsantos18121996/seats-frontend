import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPeriod, selectTerrain, getSeats } from '../actions/seatsActions';
import SeatInformation from "./SeatInformation";

class SeatsOption1 extends Component {

    //aumentar a json, 
    /***
     * {
     * periodo : "2024-I",
     * terrenos : [
     *  {name : "T0001", trees: []}
     * ]
     * }
     */

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
        //console.log('asientos in SeatsOption1', this.props.seats.seats.seats);
        return (
            <div className="container">
                <div className="row mt-3 mb-3">
                    <div className="col-12 col-md-5">
                        <select
                            className="form-select"
                            onChange={e => {
                                const { value } = e.target;
                                this.setState({
                                    period: value
                                }, () => this.props.selectPeriod(value))
                            }}
                            value={this.state.period}
                        >
                            <option>Seleccione un periodo</option>
                            {this.state.periods.map(period => (
                                <option key={period} value={period}>{period}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-md-5">
                        <select
                            className="form-select"
                            onChange={e => {
                                const { value } = e.target;
                                this.setState({
                                    terrain: value
                                }, () => this.props.selectTerrain(value))
                            }}
                            value={this.state.terrain}
                        >
                            <option>Seleccione un terreno</option>
                            {this.state.terrains.map(terrain => (
                                <option key={terrain} value={terrain}>{terrain}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-md-2">
                        <button
                            className="btn btn-primary"
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
                </div>

                {
                    this.props.seats !== null && this.props.seats.seats !== null ?
                        (<div className="row">
                            <SeatInformation seats={this.props} />
                        </div>) :
                        "Cargando informacion de asientos..."
                }
            </div>

        )
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats })(SeatsOption1);