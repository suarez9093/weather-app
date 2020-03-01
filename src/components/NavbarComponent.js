import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (

        <header>
            <div className="container container-flex">
                <div className="header-title-container">
                    <h1 className="header-title">Weather Point</h1>
                    <p className="header-subtitle">Generate Random Weather Point data</p>
                </div>
                <nav className="navigation">
                    <ul className="navigation-list">
                        <li className="navigation-list-item"><Link to="/" className="navigation-link">Home</Link></li>
                        <li className="navigation-list-item"><Link to="/saved" className="navigation-link">Saved Weather Points</Link></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavbarComponent;