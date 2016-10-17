import React from 'react';

import BasicLink from '../cta/BasicLink'
import BasicButton from '../cta/BasicButton'
import AuthZoneContainer from '../../containers/AuthZoneContainer'

import './Header.css';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="logo">
                <span>
                  PyGround
                  <small>alpha</small>
                </span>
            </div>
            <nav className="navigator">
                <ul>
                    <li><BasicLink text="New" link="/" /></li>
                    <li><BasicButton text="Share" onClick={null} /></li>
                    <li><BasicButton text="Run" onClick={null} /></li>
                </ul>
                <AuthZoneContainer />
            </nav>
        </div>
    </header>
);

export default Header;
