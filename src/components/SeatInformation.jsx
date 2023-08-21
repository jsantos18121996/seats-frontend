import React, { Component, Fragment } from "react";

import seatIconEnabled from '../assets/images/asiento-enabled.svg'
import seatIconDisabled from '../assets/images/asiento-occupied.svg';

import '../assets/stylesheets/Seats.css';


class SeatInformation extends Component {

    
    getImgAvailability = (status) => {
        if(status === "T") {
            return seatIconDisabled
        } else {
            return seatIconEnabled;
        }
    }

    render() {
        const rows = this.props.treesSelected.treesSelected.rows;

        return (
            <div className="SeatsInformation">
                <div className="SeatsInformation__header">
                    
                    <div>Árboles</div>
                    <div>Periodo seleccionado: {this.props.treesSelected.periodSelected}</div>
                    <div>Terreno seleccionado: {this.props.treesSelected.terrainSelected}</div>
                </div>
                <div className="SeatsInformation__body">
                    {rows.map((r, i) => {
                        return( 
                            <div className="row" key={i}>
                                {/* AQUI EVALUAR EL ATRIBUTO SEAT.SPACE QUE VENDRÁ POR CADA SEAT O FILA, EN ESE CASO SE AGREGA POR INDEX UN COL  */}
                                {r.rowNumber}
                                <Fragment>
                                    {r.columns.map((column, index) => {
                                        return(
                                            
                                                <div className="col" key={index}> 
                                                    {column.value}
                                                    <button 
                                                        className={column.status === "A" ? "btn  btn-seat" : "btn btn-seat-disabled"}
                                                        disabled={column.status === "A" ? false : true}
                                                    >{column.status !== "S" ? 
                                                        (<img src={this.getImgAvailability(column.status)} style={{height : "60px", width: "60px "}}
                                                            alt="img para test" 
                                                            
                                                             />) : null}
                                                    </button>
                                                </div>
                                            
                                        )
                                    } )
                                }
                                </Fragment>
                            </div>
    
                        )
                    })
    
                    }
                </div>
            </div>
        )
    }
}

export default SeatInformation;