import React, { Component } from 'react';
import '../styles/cennik.css'
import Range from './range';
import Pakiet from './pakiet';
import PakietyJSON from '../pakiety.json'

class Pakiety extends Component {

    constructor(props){
    super(props)
        this.state={
            hoverMini:false,
            hoverComfort:false,
            hoverMaxi:false,
            hoverPlus:false,
            total: '',
            pakiety:[]
        }
}

    handleHover=(e)=>{
        const name = e.target.id

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
    }

    offHover=()=>{

        this.setState({
            hoverMini: false,
            hoverComfort: false,
            hoverMaxi: false,
            hoverPlus: false,
        })
    }

   handleTotal=(total)=>{
        this.setState({
            total:total
        })
    }
  
    componentDidMount(){
           /* fetch('../pakiety.json',newRequest,{
                method:'GET',
                mode:'cors',
                headers:{'Content-Type':'application/json'},
                cache:'default'
            })
            .then(response =>{
                if(response.ok){
                    return response
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    pakiety:data.pakiet
                })
            })
            .catch(error => console.log("error"))*/
            this.setState({
                pakiety:PakietyJSON.pakiet
            })
    }
    componentWillUnmount(){
        this.setState({
            pakiety:[]
        })
    }
        
    render() { 
        return ( 
            <>
            <section className="pakiety">
                <Pakiet value={this.state.pakiety} onMouseEnter={this.handleHover} onMouseLeave={this.offHover} />
            </section>
            <Range getTotal={this.handleTotal}/> 
            </>
         );
    }
}

 
export default Pakiety;
