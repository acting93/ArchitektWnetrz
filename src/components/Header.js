import React from 'react';
import '../styles/header.css';
import logo from '../images/logo.png';

const Header = () => {
    return ( 
        <>
            <header className="header col-12">
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <div className="socials">
                    <p>Śledź nas na:</p>
                    <span><a href=''><i className='fab fa-facebook-f'></i></a></span>
                    <span><a href=''><i className='fab fa-instagram'></i></a></span>
                </div>
            </header>
        </>        
     );
};
 
export default Header;