import React, { Component } from "react";
import BarGraphic from "./BarGraphic";
import Navbar from "./Navbar";

class SeatsOption3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            period: "",
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
            ]
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container mt-3">
                    <h3>Reporte de análisis por terrenos de cultivo</h3>
                    <div class="mb-3 row mt-3">
                        <div className="col col-lg-3">
                            <select
                                className="form-select"
                                onChange={(e) => {
                                    console.log('e.target.value', e.target.value)
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
                                disabled={!this.state.isLoading ? false : true}
                                onClick={() => {
                                    const { period } = this.state;
                                    //const { trees } = this.props.seats;
                                    if (period === null) {
                                        alert("Debe elegir periodo, por favor");
                                    } else {
                                        this.setState({
                                            //isLoading: true
                                        }, () => {
                                            /*this.props.getTreesByPeriodAndTerrain(data);
                                            let history = createBrowserHistory();
                                            console.log('history ', history.location);
                                            history.replace(`/options/1/period/${this.state.period}/terrain/${this.state.terrain}`)*/
                                        })
                                    }

                                }}
                            >{this.state.isLoading ? "Buscando..." : "Buscar"}</button>
                        </div>

                    </div>
                    <BarGraphic />
                </div>

            </div>)
    }
}

export default SeatsOption3;