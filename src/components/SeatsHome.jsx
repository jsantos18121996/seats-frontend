import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { selectPeriod, selectTerrain, savePeriodsAndTerrains } from '../actions/seatsActions';

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
        //periods y terrains pueden venir de un servicio
        //puede venir de un endpoint que liste todos los periodos por defecto
        //seats/all y además lo podrá guardar en memoria Redux
        //en ese caso se debe comentar la funcion savePeriodsAndTerrains
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
        const data = {
            periods,
            terrains
        }
        this.setState({ periods, terrains }, () => {
            this.props.savePeriodsAndTerrains(data)
        })
    }

    render() {
        console.log('state in SeatsHome ', this.state);
        console.log('props in SeatsHome ', this.props);
        return (
            <div>Seats Home !
                {this.state.periods !== null && this.state.terrains !== null ?
                    (<div>
                        <div>
                            <select
                                onChange={e => {
                                    const { value } = e.target;
                                    this.setState({
                                        period: value
                                    }, () =>  this.props.selectPeriod(value))
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
                                    }, () =>  this.props.selectTerrain(value) )
                                }}
                            >
                                <option>Seleccione un terreno</option>
                                {this.state.terrains.map(terrain => (
                                    <option key={terrain} value={terrain}>{terrain}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button><Link to="/options">Buscar</Link></button>
                        </div>
                    </div>)
                    :
                    "Cargando"}

            </div>)
    }
}

function mapStateToProps({ seats }) {
    return {
      seats: seats
    };
  }

export default connect(mapStateToProps, { selectPeriod, selectTerrain, savePeriodsAndTerrains })(SeatsHome);