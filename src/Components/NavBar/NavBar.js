import React from 'react';
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className="header">
            <h2 className="header__title">ARROWVERSE</h2>
            <ul className="header__list">
                <li className="header__list--links">Characters</li>
                <li className="header__list--links">Imdb Page</li>
                <li className="header__list--links">Episode List</li>
            </ul>
        </div>
    );
};

export default NavBar;