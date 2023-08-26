import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain } from '../actions/seatsActions';
import SeatInformation from "./SeatInformation";
import Navbar from "./Navbar";
import withRouter from "./WithRouter";
import { createBrowserHistory } from "history";
import Loading from "./Loading";


class SeatsOption1 extends Component {

   


    constructor(props) {
        super(props);
        this.state = {
            periods: null,
            terrains: null,
            period: null,
            terrain: null,
            isLoading : this.props.seats.isLoading,
        }
    }

    componentDidMount = () => {
        //const { period, terrain, trees } = this.props.seats;
        console.log('en componentDidMOunt del SeatsOption1 ', this.props);
       
        //this.props.params.period = "2023-I";
        //console.log('useParams()', useParams());
       
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
                period : "2023-II",
                terrains: [
                    {terrain : "T001"},
                    {terrain : "T002"},
                    {terrain : "T003"},
                    {terrain : "T004"}
                ]
            }
        ]
        if(this.props.params.period && this.props.params.terrain) {
            console.log('si tiene params en el navegador !');
            const {period, terrain} = this.props.params;
            this.setState({
                periods : periods,
                terrains : terrains,
                period : period,
                terrain : terrain,
                isLoading : true
            }, () => {
                const data = {
                    period,
                    terrain
                }
                this.props.getTreesByPeriodAndTerrain(data);
            })
        } else {
            console.log('no tiene params en navegador !');
            this.setState({
                periods : periods,
                terrains : terrains
            })
        }
       
    }

    componentWillReceiveProps = (nextProps) => {
        console.log('entrando al componentWillReceiveProps ', nextProps);
        this.setState({
            isLoading : false
        })
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount !!!!!!!');
    } 

    render() {
        console.log('seatsOptions state ', this.state);
        console.log('seatOptions props ', this.props);
        return (
            <div>
                <Navbar />
                {this.state.periods !== null && this.state.terrains !== null ?
                    (<div className="container mt-3">
                        <div className="row">
                        <h3>Reporte 1</h3>
                        </div>
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
                                        className={"btn btn-primary"}
                                        disabled={!this.state.isLoading ? false : true}
                                        onClick={() => {
                                            const { period, terrain } = this.state;
                                            //const { trees } = this.props.seats;
                                            if(period === null || terrain === null) {
                                                alert("Debe elegir periodo y terreno, por favor");
                                            } else {
                                                const data = {
                                                    period,
                                                    terrain
                                                }
                                                this.setState({
                                                    isLoading : true
                                                }, () => {
                                                    this.props.getTreesByPeriodAndTerrain(data);
                                                    let history = createBrowserHistory();
                                                    console.log('history ', history.location);
                                                    history.replace(`/options/1/period/${this.state.period}/terrain/${this.state.terrain}`)
                                                })    
                                            }
                                            
                                        }}
                                    >{this.state.isLoading ? "Buscando..." : "Buscar"}</button>
                            </div>
                        </div>

                        {
                            this.state.isLoading ? 
                            (<Loading />) :
                            (this.props.seats.treesSelected === null ? (null) :
                            (this.state.isLoading ? (<Loading />) : 
                                (this.props.seats.treesSelected.treesSelected !== null
                                    && this.props.seats.treesSelected.treesSelected.rows.length > 0 ? (
                                    (<div className="row">
                                    <SeatInformation 
                                        period={this.props.seats.period} 
                                        terrain={this.props.seats.terrain}
                                        periods={this.props.seats.periods}
                                        terrains={this.props.seats.terrains}
                                        trees={this.props.seats.trees}
                                        treesSelected={this.props.seats.treesSelected}
                                    />
                                </div>)
                                ) : "No se encontraron resultados"))
                            )
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
export default withRouter(connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain })(SeatsOption1)) 

//export default withRouter(SeatsOption1) 
//connect(mapStateToProps, { selectPeriod, selectTerrain, getSeats, getTreesByPeriodAndTerrain })(SeatsOption1)  ;