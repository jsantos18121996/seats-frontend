import React, { Component } from 'react';
import "../assets/stylesheets/Loading.css";

class Loading extends Component {
    render() {
        return(
            <div  
                style={{textAlign: "center", 
                            marginTop: "50px", 
                            marginBottom: "50px"}}>
                 <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
               
        )
    }
}

export default Loading;