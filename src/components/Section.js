import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../subpages/homepage';
import Cennik from '../subpages/cennik.js';
import Kontakt from '../subpages/kontakt.js';
import Portfolio from '../subpages/portfolio.js';
import Services from '../subpages/services.js'
import '../styles/section.css';

class Section extends Component {
    
    render() { 
        return (
            <>
                <section className="col-12 col-xl-10 sectionRoute">
                    <Switch>
                        {/*<Route path={process.env.PUBLIC_URL + "/"} component={HomePage}/>*/}
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/cennik" component={Cennik}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/uslugi" component={Services}/>
                        <Route path="/contact" component={Kontakt}/>
                    </Switch>
                </section>
            </>
          );
    }
}
 
export default Section;