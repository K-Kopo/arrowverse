import React from 'react';
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="header">
            <h2 className="header__title">INTO THE ARROWVERSE</h2>
            <ul className="header__list">
                <a href="https://www.imdb.com/title/tt2193021/" className="header__list--links">Imdb Page</a>
                <li className="header__list--links">Episode List</li>
            </ul>
        </div>
    );
};

export default NavBar;