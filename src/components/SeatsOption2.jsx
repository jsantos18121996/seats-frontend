import React, { Component } from "react";
import Navbar from "./Navbar";
import withRouter from "./WithRouter";

class SeatsOption2 extends Component {
    componentDidMount = () => {
        console.log('SeatsOption2 didMount ', this.props);
    }
    render() {
        return(
        <div className="" 
            >
                <Navbar />
                <div className="container mt-3">
                    <div className="row">
                        <h3>Reporte 2</h3>
                        </div>
                </div>
                
        </div>)
    }
}

export default withRouter(SeatsOption2);