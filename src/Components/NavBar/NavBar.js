import React from 'react';
import "./NavBar.scss";
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header__title">INTO THE ARROWVERSE</NavLink>
            <ul className="header__list">
                <a href="https://www.imdb.com/title/tt2193021/" className="header__list--links">Imdb Page</a>
                <NavLink to="/episodes" className="header__list--links">Episode List</NavLink>
            </ul>
        </div>
    );
};

export default NavBar;