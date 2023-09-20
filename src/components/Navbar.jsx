import React from "react";

import iconHome from '../assets/images/icons/arbol.png';
import { Link } from "react-router-dom";

const Navbar = () => (

    <nav
        className="navbar navbar-expand-lg navbar-light text-white"
        style={{ background: "#20396e" }}
    >
        <div className="container-fluid">

            <ul className="navbar-nav">
                <li className="navbar-brand" href="#">
                    <img src={iconHome} alt="iconHome" width="30" height="24" />
                </li>
                <li className="nav-item">
                    <Link to={"/options/1"} className="nav-link active text-white">Reporte1</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/options/2"} className="nav-link active text-white">Reporte2</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/options/3"} className="nav-link active text-white">Reporte3</Link>
                </li>
            </ul>
        </div>
    </nav >

)

export default Navbar;