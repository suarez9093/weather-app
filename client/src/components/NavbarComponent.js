import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent({ searchField, handleFormSubmit, handleInputChange }) {
    return (

        <header>
            <div className="container container-flex">
                <div className="header-title-container">
                    <h1 className="header-title">Weather Point</h1>
                    <p className="header-subtitle">Generate Random Weather Point data</p>
                </div>
                <nav className="navigation">
                    <ul className="navigation-list">
                        <li className="navigation-list-item"> <input className=""
                            type="text" name="markerCount"
                            value={searchField}
                            id="markerCount"
                            placeholder="Search up to 10 points"
                            onChange={handleInputChange} /></li>
                        <li className="navigation-list-item"><button className='btn btn-primary' onClick={handleFormSubmit}>Search</button></li>
                        <li className="navigation-list-item"><Link to="/" className="navigation-link">Home</Link></li>
                        <li className="navigation-list-item"><Link to="/saved" className="navigation-link">Saved Weather Points</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavbarComponent;