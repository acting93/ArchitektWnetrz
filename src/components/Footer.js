import React from 'react';
import '../styles/footer.css'
import logo from '../images/logo.png'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="footerDiv">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footerDiv">
                    <h4>ARCHITEKT WNĘTRZ</h4>
                    <div className="iconsContact">
                        <span><i className="fas fa-map-marker-alt"></i>
                            <p>ul.XYZ X/X,<br/> 00-545 Warszawa</p>
                        </span>
                        <span><i className="fas fa-mobile-alt"></i>
                            <p>RYSZARD +48 xxx xxx xxx</p>
                            <p>EDEK +48 xxx xxx xxx</p>
                            <p>ANTEK +48 xxx xxx xxx</p>
                        </span>
                        <span><i className="fas fa-envelope"></i><p>xyz@xyz.pl</p></span>
                    </div>
                </div>
            </footer>
        </>

     );
};
 
export default Footer;