import React from "react";
import {useState} from "react";
import logoEconotravel from '../../assets/logoEconotravel1.png';
import {Link} from "react-router-dom";
import "./header.css"

export const Header = ({loggedIn, onLoginChange}) => {



    const onLoggedin = () => {
        onLoginChange(!loggedIn)
    }

    return (
        <header className="header">
            <nav className="topNavBar">
                <Link to="/">
                    <div className="topNavBar-brand">
                            <img className="logoImg" src={logoEconotravel} alt={"Econotravel logo"}/>
                    </div>

                </Link>
                <ul className="topNavBar-links">

                    {loggedIn ?

                        <>
                            <li className="nav-item">
                                <Link className="nav-link" id="reserve-link" to="/reserve">Reserva</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Quienes somos</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={onLoggedin} className="nav-link login" to="/">{loggedIn ? 'Log in' : 'Log out'}</Link>
                            </li>
                        </>

                    :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/reservesList">Lista de Reservas</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Añadir Experiencia</Link>
                            </li>

                            <li className="nav-item">
                                <Link onClick={onLoggedin} className="nav-link login"  to="/">{loggedIn ? 'Log in' : 'Log out'}</Link>
                            </li>
                        </>

                    }

                </ul>
            </nav>
        </header>
    )
}