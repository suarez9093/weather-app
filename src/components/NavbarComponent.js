import React from 'react';
import {Link} from 'react-router-dom';

function NavbarComponent(){
    return(
        <nav className='navigation-bar'>
            <ul className='navigation-list-items'>
            <li className='navigation-list-item'><Link className='navigation-link' to='/'>Home</Link></li>
            <li className='navigation-list-item'><Link className='navigation-link' to='/saved'>Saved Weather Points</Link></li>
            </ul>
        </nav>
    )
}
export default NavbarComponent;