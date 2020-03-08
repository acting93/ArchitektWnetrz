import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navbar.js'
import Header from './components/Header.js'
import Section from './components/Section.js'
import Footer from './components/Footer.js'
import { Jumbotron } from 'react-bootstrap';
import ScrollToTop from 'react-router-scroll-top';
//import Cookies from './Cookies.js'

class App extends Component {

  render() { 
    return ( 
          <Router onUpdate={() => window.scrollTo(0, 0)}>
            <ScrollToTop>
                <Jumbotron fluid>
                  <Header/>
                  <Navigation/>
                </Jumbotron>
                <Section/>
                <Footer />
            </ScrollToTop>
          </Router>
     );
  }
}
 

export default App;
