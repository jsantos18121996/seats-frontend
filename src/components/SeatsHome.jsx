import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { selectPeriod, selectTerrain, savePeriodsAndTerrains, getSeats } from '../actions/seatsActions';

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
        this.props.getSeats(null);//llamado al api general
        const periods = [
            "2022-I",
            "2022-II",
            "2023-III",
            "2024-I"
        ];
        const terrains = [
            "T001",
            "T002",
            "T003",
            "T004"
        ]
        /*this.setState({ periods, terrains }, () => {
            this.props.savePeriodsAndTerrains(data)
        })*/
    }

    render() {
        return (
            <div className="container mt-3 mb-3">
                {this.props.seats.periods ?
                    (<div className="row align-middle">
                        <div className="col-12 col-md-5">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={e => {
                                    const { value } = e.target;
                                    this.setState({
                                        period: value
                                    }, () => this.props.selectPeriod(value))
                                }}
                            >
                                <option>Seleccione un periodo</option>
                                {this.props.seats.periods.map(period => (
                                    <option key={period.period} value={period.period}>{period.period}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-5">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                onChange={e => {
                                    const { value } = e.target;
                                    this.setState({
                                        terrain: value
                                    }, () => this.props.selectTerrain(value))
                                }}
                            >
                                <option>Seleccione un terreno</option>
                                {this.props.seats.terrains.map(terrain => (
                                    <option key={terrain.terrain} value={terrain.terrain}>{terrain.terrain}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-2">
                            <button className="btn btn-primary"
                                disabled={(this.state.period === null || this.state.terrain === null) ? true : false}
                            >
                                <Link to="/options" className="text-white">Buscar</Link>
                            </button>
                        </div>
                    </div>) : "Cargandoo..."
                }

            </div>)
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, { selectPeriod, selectTerrain, savePeriodsAndTerrains, getSeats })(SeatsHome);