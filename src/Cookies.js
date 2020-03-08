import React, { Component } from 'react';

class Cookies extends Component {
      state = {
         isCookie:true
       }

      handleCookies=()=>{
          this.setState({
              isCookie:false
          })
      } 

      componentDidMount(){
          if(localStorage.getItem('storage')){
            this.setState({
                isCookie:false
            })
          }
      }

   
    render() { 
        return ( 
            <>
               {this.state.isCookie && <div className="cookie"><p>Ta strona używa ciasteczek aby świadczyć
                usługi na najwyższym poziomie. Akceptacja regulaminu oznacza, że zgadzasz się na ich użycie</p>
                <button onClick={this.handleCookies} className="cookieBtn">Akceptuję</button></div> } 
            </>
            
         );
    }
}
 
export default Cookies;