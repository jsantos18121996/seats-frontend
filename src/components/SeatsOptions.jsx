import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class SeatsOptions extends Component {

    render() {
        console.log('SeatsOptions ', this.props)
        return (
            <div>
                SeatsOptions !
                <ul className="App-header">
                    <li>
                        <Link to="/options/1">Opcion 1</Link>
                    </li>
                    <li>
                        <Link to="/options/2">Opcion 2</Link>
                    </li>
                    <li>
                        <Link to="/options/3">Opcion 3</Link>
                    </li>
                </ul>
            </div>)
    }
}

function mapStateToProps({ seats }) {
    return {
        seats: seats
    };
}

export default connect(mapStateToProps, null)(SeatsOptions);