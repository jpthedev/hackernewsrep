import React from 'react'
import logo from '../../assets/favicon-32x32.png';

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='Y' />
            </div>
            <ul>
                <li>top</li>
                <li>new</li>
            </ul>
        </div>
    )
}

export default Header
