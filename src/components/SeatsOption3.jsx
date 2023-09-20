import React, { Component } from "react";
import BarGraphic from "./BarGraphic";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import withRouter from "./WithRouter";
import { getTerrainsByPeriod } from '../actions/seatsActions';

class SeatsOption3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            period: null,
            periods: [
                {
                    period: "2023-I",
                    terrains: [
                        { terrain: "T001" },
                        { terrain: "T002" },
                        { terrain: "T003" }
                    ]
                },
                {
                    period: "2023-II",
                    terrains: [
                        { terrain: "T001" },
                        { terrain: "T002" },
                        { terrain: "T003" }
                    ]
                },
                {
                    period: "2024-I",
                    terrains: [
                        { terrain: "T001" },
                        { terrain: "T002" },
                        { terrain: "T003" }
                    ]
                },
            ],
            isLoadingTerrainsByPeriod: false
        }
    }

    getDataByTerrainsForBar(terrainsByPeriod) {
        let terrains = [];
        terrainsByPeriod.forEach(t => {
            terrains.push(t.code);
        });
        let sanos = [];
        let enfermos = [];
        let nds = [];

        terrainsByPeriod.forEach(t => {
            t.results.forEach(r => {
                switch (r.type) {
                    case "sano":
                        sanos.push(r.quantity);
                        break;
                    case "enfermo":
                        enfermos.push(r.quantity);
                        break;
                    default:
                        nds.push(r.quantity);
                }
            })
        });

        const myData = {
            labels: terrains,
            datasets: [
                {
                    labels: "Sanos",
                    data: sanos,
                    backgroundColor: 'green',
                    stack: 'Stack 0'
                },
                {
                    labels: "Enfermos",
                    data: enfermos,
                    backgroundColor: 'red',
                    stack: 'Stack 0'
                },
                {
                    labels: "No determinado",
                    data: nds,
                    backgroundColor: 'gray',
                    stack: 'Stack 0'
                }
            ]
        };

        return myData;
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            isLoadingTerrainsByPeriod: false
        })
    }

    componentWillUnmount = () => {
        this.props.seats.terrainsByPeriod = null;
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-3 mb-3">
                    <h3>Reporte de análisis por terrenos de cultivo</h3>
                    <div className="mb-3 row mt-3">
                        <div className="col col-lg-3">
                            <select
                                className="form-select"
                                onChange={(e) => {
                                    this.setState({
                                        period: e.target.value
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
                        <div className="col col-lg-2">
                            <button
                                className={"btn btn-primary"}
                                disabled={!this.state.isLoadingTerrainsByPeriod ? false : true}
                                onClick={() => {
                                    const { period } = this.state;
                                    if (period === null) {
                                        alert("Debe elegir periodo, por favor");
                                    } else {
                                        this.setState({
                                            isLoadingTerrainsByPeriod: true
                                        }, () => {
                                            this.props.getTerrainsByPeriod(period);
                                        })
                                    }

                                }}
                            >{this.state.isLoadingTerrainsByPeriod ? "Buscando..." : "Buscar"}</button>
                        </div>

                    </div>
                    {
                        this.props.seats.terrainsByPeriod !== null ?
                            <BarGraphic data={this.getDataByTerrainsForBar(this.props.seats.terrainsByPeriod)} /> : null
                    }

                </div>

            </div>)
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default withRouter(connect(mapStateToProps, { getTerrainsByPeriod })(SeatsOption3));