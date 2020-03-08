import React, { Component } from 'react';
import '../styles/cennik.css';
import {NavLink} from 'react-router-dom'


class Range extends Component {

    inputsValue ='' ;
    _isMounted = false ;

    state={
        valueFlat:'1250',
        m2Flat:1,
        progressm2Flat:0,
        valueKitchen:0,
        kitchen:1,
        progressKitchen:0,
        valueBath:0,
        bath: 1,
        progressBath:0,
        total:'1250',
        activeMini:true,
        activeComfort:false,
        activeMaxi:false,
        activePlus:false,
        activePakiet:false,
        pakietName:'MINI'
    }


    handleValue=(e)=>{

        const name = e.target.name
        const min = e.target.min
        const max = e.target.max

                 
        if(name === 'flat'){
                this.setState({
                    m2Flat: e.target.value,
                    progressm2Flat: (e.target.value/max)*100 //90 == max value input 
                })
            if(e.target.value > 90){
                this.setState({
                    m2Flat: 90,
                    progressm2Flat: (e.target.value/max)*100 //90 == max value input 
                })
            }
        }

        else if(name === 'kitchen'){
            this.setState({
                kitchen: e.target.value,
                progressKitchen: ((e.target.value - min) / (max - min))*100 
            })
            if(e.target.value > 4){
                this.setState({
                    kitchen: 4,
                    progressKitchen: (e.target.value/max)*100 //90 == max value input 
                })
            }
        }
        
        else if(name === 'bath'){
            this.setState({
                bath: e.target.value,
                progressBath: ((e.target.value - min) / (max - min))*100 
            })
            if(e.target.value > 4){
                this.setState({
                    bath: 4,
                    progressBath: (e.target.value/max)*100 //90 == max value input 
                })
            }
            
        }
       
        this.setState(state=>({
            total: parseInt(state.valueFlat) + parseInt(state.valueKitchen) + parseInt(state.valueBath)
        }))
            
    }

    handlePakiet=(e)=>{

        const pakiet = e.target.id

        if(pakiet === 'mini'){
            this.setState({
                activeMini:true,
                activeComfort:false,
                activeMaxi:false,
                activePlus:false,
                m2Flat:1,
                kitchen:1,
                bath:1,
                progressm2Flat:1,
                progressBath:1,
                progressKitchen:1,
                valueFlat:'1250',
                pakietName:'MINI'
            })
        }

        if(pakiet === 'comfort'){
            this.setState({
                activeComfort:true,
                activeMini:false,
                activeMaxi:false,
                activePlus:false,
                m2Flat:1,
                kitchen:1,
                bath:1,
                progressm2Flat:1,
                progressBath:1,
                progressKitchen:1,
                valueFlat:'2500',
                pakietName:'COMFORT'
            })
        }

        if(pakiet === 'maxi'){
            this.setState({
                activeComfort:false,
                activeMini:false,
                activeMaxi:true,
                activePlus:false,
                m2Flat:1,
                kitchen:1,
                bath:1,
                progressm2Flat:1,
                progressBath:1,
                progressKitchen:1,
                valueFlat:'4000',
                pakietName:'MAXI'
            })
        }
        if(pakiet === 'plus'){
            this.setState({
                activePlus:true,
            })
        }
        this.setState(state=>({
            total: parseInt(state.valueFlat) + parseInt(state.valueKitchen) + parseInt(state.valueBath),
            
        }))
        
    }

    handlePrize(){
    //pakiety
    //////obliczenia dla pokoju
        const {m2Flat,kitchen,bath,activeMini,activeComfort,activeMaxi} = this.state 

        //40 === pierwszy próg cenowy pokój <= 40m2 == 1250zl
        //1 ===  pierwszy próg cenowy kuchnia === 1 == 1250zl
        
        if(this._isMounted){
            if(activeMini){
                if(m2Flat <= 40){
                    this.setState({
                        valueFlat: 1250,
                    })
                }
                if(m2Flat > 40){
                    this.setState({
                        valueFlat: (((m2Flat - 40) /1) * 30+1250) // ((this.state.m2Flat - pierwszy próg cenowy) / step w input range) * wysokość wzrostu (30PLN)+1250PLN(cena początkowa)
                    })           
                }
            }

            else if(activeComfort){
                if(m2Flat <= 40){
                    this.setState({
                        valueFlat: 2500,
                    })
                }
                if(m2Flat > 40){
                    this.setState({
                        valueFlat: (((m2Flat - 40) /1) * 30+2500) // ((this.state.m2Flat - pierwszy próg cenowy) / step w input range) * wysokość wzrostu (30PLN)+1250PLN(cena początkowa)
                    })           
                }
            }

            else if(activeMaxi){
                if(m2Flat <= 40){
                    this.setState({
                        valueFlat: 4000,
                    })
                }
                if(m2Flat > 40){
                    this.setState({
                        valueFlat: (((m2Flat - 40) /1) * 30+4000) // ((this.state.m2Flat - pierwszy próg cenowy) / step w input range) * wysokość wzrostu (30PLN)+1250PLN(cena początkowa)
                    })           
                }
            }
        /////  
        /////obliczenia dla kuchni
            if(kitchen <= 1){ 
                this.setState({
                    valueKitchen: 0
                })
            } 
            else if(kitchen > 1 ) {
                this.setState({
                    valueKitchen: ((kitchen-1)/1)*150+0 // ((this.state.kitchen - pierwszy próg cenowy) / step w input range) * wysokość wzrostu (150PLN)+1250PLN(cena początkowa)
                })
            } 

        //// obliczenia dla łazienki 
        if(bath <= 1){
                this.setState({
                    valueBath: 0
                })
            }

            else if(bath > 1 ) {
                this.setState({
                    valueBath: ((bath-1)/1)*150+0 // ((this.state.bath - pierwszy próg cenowy) / step w input range) * wysokość wzrostu (150PLN)+1250PLN(cena początkowa)
                })
            }
            
            ///aktualizacja state o nowe wartości dodane w funkcji
            this.setState(state=>({
                total: parseInt(state.valueFlat) + parseInt(state.valueKitchen) + parseInt(state.valueBath),
                
            }))

            //przekazanie funkcji do rodzica wartość props.total
            this.props.getTotal(this.state.total)
        }
     
    }

    componentDidMount(){
        this._isMounted = true
        if(this._isMounted){
            document.addEventListener('input',this.handlePrize.bind(this))
        }
    }

    componentWillUnmount(){
        this._isMounted = false
        document.removeEventListener('input',this.handlePrize.bind(this))
    }
    
     render() {
       // const progressSlideRange = (this.state.m2Flat/90)*100 /// 
        const progressm2Flat ={
            background: 'linear-gradient(to right, green 0%, green '+this.state.progressm2Flat  +'%, #fff ' + this.state.progressm2Flat  + '%, white 100%)'
        }
        const progressKitchen ={
            background: 'linear-gradient(to right, green 0%, green '+this.state.progressKitchen  +'%, #fff ' + this.state.progressKitchen  + '%, white 100%)'
        }
        const progressBath ={
            background: 'linear-gradient(to right, green 0%, green '+this.state.progressBath  +'%, #fff ' + this.state.progressBath  + '%, white 100%)'
        }

        return (
            <>
               <div className="prizeContainer">
                    <div className="pakietChoose">
                    <p>Wybierz pakiet i sprawdź cenę</p>
                        <ul>
                            <li style={this.state.activeMini ? {background:"#0e2400",boxShadow:"0px 0px 5px yellow"}:null} id="mini" onClick={this.handlePakiet}>Mini</li>
                            <li style={this.state.activeComfort ? {background:"#0e2400",boxShadow:"0px 0px 5px yellow"}:null} id="comfort" onClick={this.handlePakiet}>Comfort</li>
                            <li style={this.state.activeMaxi ? {background:"#0e2400",boxShadow:"0px 0px 5px yellow"}:null} id="maxi" onClick={this.handlePakiet}>Maxi</li>
                            <NavLink to='/contact'><li style={this.state.activePlus ? {background:"#0e2400",boxShadow:"0px 0px 5px yellow"}:null} id="plus" onClick={this.handlePakiet}>Plus</li></NavLink>
                        </ul>
                    </div>
                    <div className="inputsRange">
                        <div className="inputsDiv">
                            <div className="input">
                                    <span><p>Powierzchnia mieszkania w m2</p></span>
                                    <input style={progressm2Flat} type="range" onChange={this.handleValue} value={this.state.m2Flat} name="flat" min="1" max="90" step="1" />
                                    <div className="ticks">
                                        <span className="tick"><p>1</p></span>
                                        <span className="tick"><p>90</p></span>
                                    </div>
                                    <p>Powierzchnia (m2):</p>
                                    <input type="number" value={this.state.m2Flat} name="flat" onChange={this.handleValue} min={1} max={90} required />
                                    <p>Cena: {this.state.valueFlat} PLN</p>
                            </div>
                        </div>
                        <div className="inputsDiv">
                            <div className="input">
                                <p>Ilosć kuchni/aneksów:</p>
                                    <input style={progressKitchen} type="range" onChange={this.handleValue} value={this.state.kitchen} name="kitchen" min="1" max="4" step="1"  />
                                    <div className="ticks">
                                        <span className="tick"><p>1</p></span>
                                        <span className="tick"><p>2</p></span>
                                        <span className="tick"><p>3</p></span>
                                        <span className="tick"><p>4</p></span>
                                    </div>
                                <p>Kuchnie:</p>
                                <input type="number" value={this.state.kitchen} name="kitchen" onChange={this.handleValue}  min="1" max="4" required/>
                                <p>Cena: {this.state.valueKitchen} PLN</p>
                            </div>
                        </div>
                        <div className="inputsDiv">
                            <div className="input">
                                <p>Ilość łazienek/WC:</p>
                                <input style={progressBath} type="range" onChange={this.handleValue} value={this.state.bath} name="bath" min="1" max="4" step="1" list="bathRange" />
                                    <div className="ticks">
                                        <span className="tick"><p>1</p></span>
                                        <span className="tick"><p>2</p></span>
                                        <span className="tick"><p>3</p></span>
                                        <span className="tick"><p>4</p></span>
                                    </div>
                                <p>Łazienki:</p>
                                <input type="number" value={this.state.bath} name="bath" onChange={this.handleValue} min="1" max="4" required/> <br/>
                                <p> Cena: {this.state.valueBath} PLN</p>
                            </div>
                        </div>
                        <div className="total">
                            <p style={{color:'green',textShadow:"0px 0px 2px silver"}}>Podsumowanie:</p>
                            <p style={{color:'#353535',borderBottom:"2px solid silver",textShadow:"0px 0px 1px green"}}>{this.state.total} PLN</p>
                            <p style={{color:"green"}}>Cena dotyczy pakietu: {this.state.pakietName} </p>
                        </div> 
                    </div>
                   
                </div> 
            </>
         );
    }
}
 
export default Range;