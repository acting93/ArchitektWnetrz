import React,{Component} from 'react';
import '../styles/homepage.css'
import TextArticle from '../textArticles/TextArticle.js'


class HomePage extends Component {
    
   render() { 
        return ( 
           <> 
            <section className="homeSection col-12">
                    <TextArticle />
            </section>
           </>
         );
    };
};



export default HomePage;