import React, { Component } from 'react';
import '../styles/cennik.css'
import Packets from '../pakiety/packets';


class PrizeList extends Component {
 
    render() { 
        return (
            <>
                <section className="sectionPrize col-12">
                    <header className="headerPrize col-12">
                        <p>WYCENA ONLINE</p>
                        <p>PAKIETY</p>
                    </header>
                    <Packets />   
                </section>

            </>
          );
    };
};
 
export default PrizeList ;