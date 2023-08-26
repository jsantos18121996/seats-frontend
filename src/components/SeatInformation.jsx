import React, { Component, Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import seatIconEnabled from '../assets/images/icons/arbol-green.png';
import seatIconDisabled from '../assets/images/icons/arbol-red.png';

import '../assets/stylesheets/Seats.css';


class SeatInformation extends Component {
    
    getImgAvailability = (status) => {
        if(status === "T") {
            return seatIconDisabled
        } else {
            return seatIconEnabled;
        }
    }

    tooltip = (i, column, row) => {
        console.log('offerItems ', row.offerItems);
        console.log('status ! ', column.status);
        if (column.status === "A") {
            return (
                <Tooltip
                    id={`tooltip-description-${i}`}
                    placement="top"
                    className="in"
                    key={i}
                ><p>Fila: {row.rowNumber} Columna: {column.value} Estado: Árbol Sano</p>
                </Tooltip>
            )
        } else if (column.status === "T") {
            return (
                <Tooltip
                    id={`tooltip-description-${i}`}
                    placement="top"
                    className="in"
                    key={i}
                    ><p>Fila: {row.rowNumber} Columna: {column.value} Estado: Árbol Enfermo</p>
                    </Tooltip>
            )
        } else {
            return (<div></div>)
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
                                            <OverlayTrigger
                                            placement="top"
                                            overlay={this.tooltip(index, column, r)}
                                            >
                                                <div className="col" key={index}> 
                                                    {column.value}{column.status !== "S" ? 
                                                        (<img src={this.getImgAvailability(column.status)} style={{height : "60px", width: "60px "}}
                                                            alt="img para test" 
                                                            
                                                             />) : null}
                                                </div>
                                            </OverlayTrigger>
                                                
                                            
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