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
        console.log('Seat Information render props ', this.props);
        //this.props.seats.seats.seats.seats.segments[0].rows.map(
        return (
            <div className="SeatsInformation">
                <div className="SeatsInformation__header">Grilla de asientos</div>
                <div className="SeatsInformation__body">
                    {this.props.seats.seats.seats.seats.segments[0].rows.map((seat, i) => {
                        return( 
                            <div className="row" key={i}>
                                {/* AQUI EVALUAR EL ATRIBUTO SEAT.SPACE QUE VENDRÁ POR CADA SEAT O FILA, EN ESE CASO SE AGREGA POR INDEX UN COL  */}
                                
                                <Fragment>
                                    {seat.columns.map((column, index) => {
                                        return(
                                            
                                                <div className="col" key={index}> 
                                                    {column.value}
                                                    <button 
                                                        className={column.status === "A" ? "btn-seat" : "btn-seat-disabled"}
                                                        disabled={column.status === "A" ? false : true}
                                                    >{column.status !== "S" ? 
                                                        (<img src={this.getImgAvailability(column.status)} style={{height : "50%"}}
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