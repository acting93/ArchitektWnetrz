import React, { Component } from 'react';
import '../styles/cennik.css'
import Range from './range';
import Packet from './packet';
import PakietyJSON from '../pakiety.json'

class Packets extends Component {

    constructor(props){
    super(props)
        this.state={
            hoverMini:false,
            hoverComfort:false,
            hoverMaxi:false,
            hoverPlus:false,
            total: '',
            pakiety:[]
        };
    };
    //on mouseEnter -zmiana koloru elementu
    handleHover=(e)=>{

        const name = e.target.id;

            if(name === 'mini'){
                this.setState({
                    hoverMini: true
                })
            }
            if(name === 'comfort'){
                this.setState({
                    hoverComfort: true
                })
            }
            if(name === 'maxi'){
                this.setState({
                    hoverMaxi: true
                })
            }
            if(name === 'plus'){
                this.setState({
                    hoverPlus: true
                })
            }
    };
//on mouseLeave -zmiana koloru elementu
    offHover=()=>{

        this.setState({
            hoverMini: false,
            hoverComfort: false,
            hoverMaxi: false,
            hoverPlus: false,
        })
    };
//funkcja z komponentu dziecka - wartość sumy
   handleTotal=(total)=>{
        this.setState({
            total:total
        })
    };
  
    componentDidMount(){
            this.setState({
                pakiety:PakietyJSON.pakiet
            })
    };

    componentWillUnmount(){
        this.setState({
            pakiety:[]
        })
    };
        
    render() { 
        return ( 
            <>
            <section className="pakiety col-12">
                <Packet value={this.state.pakiety} onMouseEnter={this.handleHover} onMouseLeave={this.offHover} />
            </section>
            <Range getTotal={this.handleTotal}/> 
            </>
         );
    };
};

 
export default Packets;
