import React, { Component } from 'react';
import '../styles/cennik.css'
import Pakiety from '../pakiety/pakiety';


class Cennik extends Component {
 
    render() { 
        return (
            <>
                <section className="sectionPrize col-12">
                    <header className="headerPrize">
                    <p>WYCENA ONLINE</p>
                    <h2>Pakiety</h2>
                    </header>
                    <Pakiety />   
                </section>

            </>
          );
    }
}
 
export default Cennik ;