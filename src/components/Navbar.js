import React, { Component } from 'react';
import '../styles/navbar.css'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'


class Navigation extends Component {
    
    state={
        sticky:false,
        navExpanded: false
    }


     handleToggle=(expanded)=>{
        this.setState({
            navExpanded: expanded
        })
     } 
     
     closeNav=()=>{
        this.setState({
            navExpanded: false
        })
     } 
     
            
    handleSticky=()=>{
        const position = window.pageYOffset
        if(position > 100){
            this.setState({
                sticky:true
            })
        }else{
            this.setState({
                sticky:false
            }) 
            }
    }

    componentDidMount(){
        this.handleSticky()
        window.addEventListener('scroll', this.handleSticky)
    }

    componentWillUnmount(){
        this.handleSticky()
        window.removeEventListener('scroll', this.handleSticky)       
    }

    render() { 
        return ( 
            <> 
            <Navbar expanded={this.state.navExpanded} onToggle={this.handleToggle} expand="lg" className={this.state.sticky ? "navbar-sticky" : "navigation col-12" }>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto navContent col-xl-10" onClick={this.closeNav}>
                                <NavLink exact to="/">O nas</NavLink>
                                <NavLink to="/cennik">Cennik</NavLink>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                                <NavLink to="/uslugi">Nasze Usługi</NavLink>
                                <NavLink to="/contact">Kontakt</NavLink>
                            </Nav>
                    </Navbar.Collapse>
            </Navbar>
       </>

         );
    }
}
 
export default Navigation;
