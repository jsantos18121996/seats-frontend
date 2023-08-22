import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain } from '../actions/seatsActions';
import SeatInformation from "./SeatInformation";

class SeatsOption1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            periods: this.props.seats.periods,
            terrains: this.props.seats.terrains,
            period: this.props.seats.period !== null ? this.props.seats.period : null,
            terrain: this.props.seats.terrain !== null ? this.props.seats.terrain : null
        }
    }

    componentDidMount = () => {
        const { period, terrain, trees } = this.props.seats;
        const data = {
            period,
            terrain,
            trees
        }
        this.props.getTreesByPeriodAndTerrain(data);
    }

    render() {
        return (
            <div>
                <Navbar />
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
                                    <option key={period.period} value={period.period}>{period.period}</option>
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
                                    <option key={terrain.terrain} value={terrain.terrain}>{terrain.terrain}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-2">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    const { period, terrain } = this.state;
                                    const { trees } = this.props.seats;
                                    const data = {
                                        period,
                                        terrain,
                                        trees
                                    }
                                    this.props.getTreesByPeriodAndTerrain(data);
                                }}
                            >Buscar</button>
                        </div>
                    </div>

                    {
                        this.props.seats !== null && this.props.seats.treesSelected !== null ?
                            (<div className="row">
                                <SeatInformation 
                                    period={this.props.seats.period} 
                                    terrain={this.props.seats.terrain}
                                    periods={this.props.seats.periods}
                                    terrains={this.props.seats.terrains}
                                    trees={this.props.seats.trees}
                                    treesSelected={this.props.seats.treesSelected}
                                />
                            </div>) :
                            "Cargando informacion de asientos..."
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain })(SeatsOption1);