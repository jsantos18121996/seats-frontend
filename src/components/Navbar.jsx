import React, { Component } from "react";

import iconHome from '../assets/images/icons/arbol.png';
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: [
                { name: "Home", href: "/" },
                { name: "Reporte1", href: "/options/1" },
                { name: "Reporte2", href: "/options/2" }
            ]
        }
    }

    render() {

        return (
            <nav
                className="navbar navbar-expand-lg navbar-light text-white"
                style={{ background: "#20396e" }}
            >
                <div className="container-fluid">

                    <ul className="navbar-nav">
                        <li class="navbar-brand" href="#">
                            <img src={iconHome} alt="iconHome" width="30" height="24" />
                        </li>
                        {
                            this.state.pages.map(p => {
                                return (
                                    <li className="nav-item">
                                        <Link to={p.href} className="nav-link active text-white">{p.name}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </nav >
        );

    }

}

export default Navbar;