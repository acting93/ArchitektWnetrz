import React from 'react';
import '../styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
    return ( 
        <>
            <header className="header col-12">
                <div className="logo"><img src={logo} alt="Logo" /></div>
            </header>
        </>        
     );
};
 
export default Header;