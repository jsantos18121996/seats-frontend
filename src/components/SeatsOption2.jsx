import React, { Component } from "react";
import Navbar from "./Navbar";
import withRouter from "./WithRouter";
import { connect } from "react-redux";
import { getTreesByPlantId } from '../actions/seatsActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import TreeDatatable from "./TreeDatatable";

class SeatsOption2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingTreesByPlantId: this.props.seats.isLoadingTreesByPlantId,
            plantId: null
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            isLoadingTreesByPlantId: false
        })
    }

    componentWillUnmount = () => {
        this.props.seats.treesByPlantId = null;
    }

    render() {
        return (
            <div className=""
            >
                <Navbar />
                <div className="container mt-3">
                    <div className="row">
                        <h3>Reporte de análisis por planta</h3>
                        <div className="mb-3 row mt-3">
                            <div className="col col-lg-2"><label for="exampleFormControlInput1" className="form-label">Ingresar código de planta: </label></div>
                            <div className="col-md-auto">
                                <input type="text"
                                    className="form-control "
                                    id="exampleFormControlInput1"
                                    placeholder="P001"
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        this.setState({
                                            plantId: value
                                        })
                                    }} />
                            </div>
                            <div className="col col-lg-2">
                                <div className="col-12 col-md-2">
                                    <button
                                        className={"btn btn-primary"}
                                        disabled={!this.state.isLoadingTreesByPlantId ? false : true}
                                        onClick={() => {
                                            const { plantId } = this.state;
                                            //const { trees } = this.props.seats;
                                            if (plantId === null) {
                                                alert("Debe ingresar el id de planta, por favor");
                                            } else {
                                                this.setState({
                                                    isLoadingTreesByPlantId: true
                                                }, () => {
                                                    this.props.getTreesByPlantId(this.state.plantId);
                                                })
                                            }

                                        }}
                                    >{this.state.isLoadingTreesByPlantId ? "Buscando..." : "Buscar"}</button>
                                </div>
                            </div>
                        </div>
                        {
                            this.props.seats.treesByPlantId !== null ?
                                <TreeDatatable data={this.props.seats.treesByPlantId} /> : null
                        }
                    </div>
                </div>

            </div>)
    }

}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default withRouter(connect(mapStateToProps, { getTreesByPlantId })(SeatsOption2));