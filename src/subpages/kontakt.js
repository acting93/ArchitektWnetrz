import React, { Component } from 'react';
import Form from '../form/Form.js'
import '../styles/contact.css'


class Kontakt extends Component {
    
    render() { 
        return (  
            <>
                <section className="col-12 contactSection">
                    <header className="contactHeader">
                        <p>Kontakt</p>
                    </header>
                    <div className="formContent">
                        <h5>Masz pytanie ? Napisz do nas !</h5>
                        <Form />
                    </div>  
                    <div className="mapContents">
                         <div className="mapConent">
                            <div className="contactDiv">
                                <div className="adress">
                                    <h2>Mo.J.A architekci</h2>
                                    <p>ul.Marszałkowska 58/15, 00-545 Warszawa</p>
                                    <p>Monika: +48 xxx xxx xxx</p>
                                    <p>Anna: +48 xxx xxx xxx</p>
                                    <p>Jacek: +48 xxx xxx xxx</p>
                                    <p>E-mail: moja@mojaarchitekci.pl</p>
                                    <p>Obserwuj nas na:</p>
                                    <span><a href='https://www.facebook.com/MoJArchitekci/'><i className='fab fa-facebook-f'></i></a></span>
                                    <span><a href='../subpages/cennik.js'><i className='fab fa-instagram'></i></a></span>
                                </div>
                            </div>
                         </div> 
                     <div className="mapConent">
                        <span><iframe title="map" className="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.073955322822!2d21.013594315898715!3d52.22387416588477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccee4c9bda6f%3A0x48d00e493b911d18!2sMarsza%C5%82kowska%2058%2C%2000-001%20Warszawa!5e0!3m2!1spl!2spl!4v1580683038326!5m2!1spl!2spl"></iframe></span>
                    </div>   
                    </div>  
                </section>
            </>
        );
    }
}
 
export default Kontakt;