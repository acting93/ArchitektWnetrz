import React, { Component } from 'react';
import Form from '../form/Form.js'
import '../styles/contact.css'


class Contact extends Component {
    
    render() { 
        return (  
            <>
                <section className="col-12 contactSection">
                    <header className="contactHeader">
                        <p>Kontakt</p>
                    </header>
                    <div className="formContent">
                        <div className='formBackground'>
                            <h5>Masz pytanie ? Napisz do nas !</h5>
                            <Form />
                        </div>
                    </div>  
                    <div className="mapContents">
                         <div className="mapConent">
                            <div className="contactDiv">
                                <div className="adress">
                                    <h2>Architekt Wnętrz</h2>
                                    <p>ul.XYZ X/X, 00-545 Warszawa</p>
                                    <p>Ryszard: +48 xxx xxx xxx</p>
                                    <p>Edek: +48 xxx xxx xxx</p>
                                    <p>Antek: +48 xxx xxx xxx</p>
                                    <p>E-mail: architektestwebsite@xyz.pl</p>
                                    {/*<span><a href=''><i className='fab fa-facebook-f'></i></a></span>*/}
                                    {/*<span><a href=''><i className='fab fa-instagram'></i></a></span>*/}
                                </div>
                            </div>
                         </div> 
                     <div className="mapConent">
                        <span><iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7432525299046!2d21.010026315898788!3d52.229882265441205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1594574596134!5m2!1spl!2spl" ></iframe></span>
                    </div>   
                    </div>  
                </section>
            </>
        );
    };
};
 
export default Contact;