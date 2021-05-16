import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../subpages/homepage';
import PrizeList from '../subpages/prizeList.js';
import Portfolio from '../subpages/portfolio.js';
import Services from '../subpages/services.js'
import '../styles/section.css';
import Contact from '../subpages/contact.js';

class Section extends Component {
    
    render() { 
        return (
            <>
                <section className="col-12 sectionRoute">
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + "/"} component={HomePage} />
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/cennik" component={PrizeList}/>
                        {/*<Route path="/portfolio" component={Portfolio}/>*/}
                        {/*<Route path="/uslugi" component={Services}/>*/}
                        <Route path="/kontakt" component={Contact}/>
                    </Switch>
                </section>
            </>
          );
    }
}
 
export default Section;