import React, { Component } from "react";
import Navbar from "./Navbar";
import withRouter from "./WithRouter";

import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from "react-data-table-component";
import TreeDatatable from "./TreeDatatable";

class SeatsOption2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading : false
        }
    }

    componentDidMount = () => {
        console.log('SeatsOption2 didMount ', this.props);
        //llamar a nuevo action -> getPeriodByPlant(plantID)
    }

    renderTable() {
        console.log('entrando al renderTsable')
        //aqui obtengo la data del props.periods
        //const data = this.props.periods;
        const data = [
            {
                "plantaId": "T01-1-1",
                "terrainCode": "T01",
                "periodCode": "2022-1",
                "fechaAnalisis": "2022-02-10",
                "agricultor": "Juan Pablo",
                "resultadoCode": "A"
            },
            {
                "plantaId": "T01-1-1",
                "terrainCode": "T01",
                "periodCode": "2022-2",
                "fechaAnalisis": "2022-09-10",
                "agricultor": "Pedro Quispe",
                "resultadoCode": "A"
            },
            {
                "plantaId": "T01-1-1",
                "terrainCode": "T01",
                "periodCode": "2023-1",
                "fechaAnalisis": "2023-02-12",
                "agricultor": "Alex Lora",
                "resultadoCode": "A"
            }
        ]

        const columns = [
            {
                name: "Periodo",
                selector: "periodCode",
                sortable: true
            },
            {
                name: "Fecha",
                selector: "fechaAnalisis",
                sortable: true
            },
            {
                name: "Agricultor",
                selector: "agricultor",
                sortable: true
            },
            {
                name: "Resultado",
                selector: "resultadoCode",
                sortable: true
            }
        ]

        return (
            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    title="Titulo de tabla"
                />
            </div>
        )
    }

    render() {
        return (
            <div className=""
            >
                <Navbar />
                <div className="container mt-3">
                    <div className="row">
                        <h3>Reporte de análisis por planta</h3>
                        <div class="mb-3 row mt-3">
                            <div className="col col-lg-2"><label for="exampleFormControlInput1" className="form-label">Ingresar código de planta: </label></div>
                            <div className="col-md-auto"><input type="text" className="form-control " id="exampleFormControlInput1" placeholder="P001" /></div>
                            <div className="col col-lg-2">
                                <div className="col-12 col-md-2">
                                    <button
                                        className={"btn btn-primary"}
                                        disabled={!this.state.isLoading ? false : true}
                                        onClick={() => {
                                            const { period } = this.state;
                                            //const { trees } = this.props.seats;
                                            if (period === null) {
                                                alert("Debe elegir periodo, por favor");
                                            } else {
                                                const data = {
                                                    period
                                                }
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
                        </div>
                        <TreeDatatable />
                    </div>
                </div>

            </div>)
    }

}

export default withRouter(SeatsOption2);