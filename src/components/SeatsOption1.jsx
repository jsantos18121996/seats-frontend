import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain } from '../actions/seatsActions';
import SeatInformation from "./SeatInformation";
import Navbar from "./Navbar";

class SeatsOption1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            periods: null,
            terrains: null,
            period: null,
            terrain: null,
            isLoading : false
        }
    }

    componentDidMount = () => {
        //const { period, terrain, trees } = this.props.seats;
       
        const terrains =  [
            {terrain : "T001"},
            {terrain : "T002"},
            {terrain : "T003"},
            {terrain : "T004"}

        ]
        const periods = [//esto debe de obtenerse de un api
            {
                period: "2022-I", 
                terrains: [
                    {terrain : "T001"}
                ]
            },
            {
                period : "2022-II",
                terrains: [
                    {terrain : "T001"},
                    {terrain : "T002"}
                ]
            },
            {
                period : "2023-I",
                terrains: [
                    {terrain : "T001"},
                    {terrain : "T002"},
                    {terrain : "T003"}
                ]
            },
            {
                period : "2023-I",
                terrains: [
                    {terrain : "T001"},
                    {terrain : "T002"},
                    {terrain : "T003"},
                    {terrain : "T004"}
                ]
            }
        ]
        this.setState({
            periods : periods,
            terrains : terrains
        })
        //this.props.getTreesByPeriodAndTerrain(data);
    }

    render() {
        console.log('seatsOptions ', this.props);
        console.log('states ', this.state);
        return (
            <div>
                <Navbar />
                {this.state.periods !== null && this.state.terrains !== null ?
                    (<div className="container">
                        <div className="row mt-3 mb-3">
                            <div className="col-12 col-md-5">
                                <select
                                    className="form-select"
                                    onChange={ (e) => {
                                        console.log('e.target.value'  , e.target.value)
                                        this.setState({
                                           period : e.target.value
                                        })
                                    }}
                                    value={this.state.period}
                                >
                                    <option>Seleccione un periodo</option>
                                    {(this.state.periods.map(period => (
                                        <option key={period.period} value={period.period}>{period.period}</option>
                                    )))}
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
                                    {
                                    (this.state.terrains.map(terrain => (
                                        <option key={terrain.terrain} value={terrain.terrain}>{terrain.terrain}</option>
                                        ))
                                    )}
                                    
                                </select>
                            </div>
                            <div className="col-12 col-md-2">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        const { period, terrain } = this.state;
                                        //const { trees } = this.props.seats;
                                        const data = {
                                            period,
                                            terrain
                                        }
                                        this.props.getTreesByPeriodAndTerrain(data);
                                    }}
                                >Buscar</button>
                            </div>
                        </div>

                        {this.state.isLoading ? "Cargando" : null}
                        {this.props.seats !== null && this.props.seats.treesSelected !== null ?
                                (<div className="row">
                                    <SeatInformation 
                                        period={this.props.seats.period} 
                                        terrain={this.props.seats.terrain}
                                        periods={this.props.seats.periods}
                                        terrains={this.props.seats.terrains}
                                        trees={this.props.seats.trees}
                                        treesSelected={this.props.seats.treesSelected}
                                    />
                                </div>) : null
                        }
                    </div>) : "Loading..."
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

export default connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain })(SeatsOption1);