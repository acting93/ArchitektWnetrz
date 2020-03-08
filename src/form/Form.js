import React, { Component } from 'react';
import '../styles/contact.css'
import axios from 'axios'


class Form extends Component {
    
    state={
        title:'',
        mail:'',
        phone:'',
        textarea:'',
        send:'',
        infomail:false,
        errors:{
            title:false,
            mail:false,
            phone:false,
            textarea:false
        }
    }
   
    handleChange=(e)=>{
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]:value
        })
    }
      
    handleSubmit=(e)=>{
        e.preventDefault()
        const validate = this.validation()

        if(validate.correctValidate){
              axios({
                    mode:'no-cors',
                    method:'post',
                    //url:'../api/index.php',
                    url:'http://localhost/mailer/index.php',
                    headers: { 'Content-Type': 'application/json'},
                    data: JSON.stringify(this.state)
                })
                .then(result => {
                  this.setState({
                    send: result.data.sent,
                    infomail:true
                  })
                  console.log(result)
                })
                .catch(error => this.setState({send:error.message}));
                
              /* fetch('https://HonoredWelllitRar--five-nine.repl.co',{
                    mode:'no-cors',
                    method:'POST',
                    headers:{
                        'Contetnt-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body:JSON.stringify(this.state)                   
                })
                .then(response=> response.tejson())
                .then(data=>{ 
                    this.setState({
                        send:"wysłano" + data 
                    })
                    
                })
                .catch(error => this.setState({send:error.message}))
                */
            this.setState({
               title:'',
                mail:'',
                phone:'',
                textarea:'',
                errors:{
                    title:false,
                    mail:false,
                    phone:false,
                    textarea:false
                } 
            })
            localStorage.setItem('form',JSON.stringify(this.state))       
            //localStorage.setItem('mail',JSON.stringify(this.state.mail))        
           // localStorage.setItem('phone',JSON.stringify(this.state.phone))
        }
        else{
            this.setState({
                errors:{
                    title:!validate.title,
                    mail:!validate.mail,
                    phone:!validate.phone,
                    textarea:!validate.textarea
                }
            })
        }
    }
    
    validation=()=>{
        let correctValidate = false
        let title = false
        let mail = false
        let phone = false 
        let textarea = false
        

        if(this.state.title.length > 3){
            title = true
        }
        if(this.state.mail.indexOf('@') !== -1){
            mail = true
        }
        if(this.state.phone.length > 8){
            phone = true
        }
        if(this.state.textarea.length > 10){
            textarea = true
        }
        if(title && mail && phone && textarea){
            correctValidate = true
        }
        return({title,mail,phone,textarea,correctValidate})
        
    }
    
       /* componentDidMount(){
          const storage = JSON.parse(localStorage.getItem('form'))
            if(localStorage.getItem('form')){
                this.setState({
                    mail: storage.mail,
                    phone: storage.phone
                })
            }else{
                this.setState({
                    title: '',
                    phone:''
                })
            }

           // localStorage.setItem('title',JSON.stringify(this.state.title))        
           // localStorage.setItem('mail',JSON.stringify(this.state.mail))        
           // localStorage.setItem('phone',JSON.stringify(this.state.phone))
   }*/
    
    render() { 
        
        return (
            <>
                <form onSubmit={this.handleSubmit} method="post" noValidate>
                    <label htmlFor="title ">Temat: </label><br/>
                         <input
                          type="text"
                          placeholder="co najmniej 3 znaki"
                          value={this.state.title}
                          name="title"
                          onChange={this.handleChange}
                          /><br/>
                         {this.state.errors.title ? <p className="error">"Pole musi zawierać co najmniej 3 znaki"</p> : null}
                    
                    <label htmlFor="mail">Adres e-mail:</label><br/>
                         <input
                          type="email"
                          value={this.state.mail}
                          name="mail"
                          onChange={this.handleChange}
                          /><br/>
                         {this.state.errors.mail ? <p className="error">"Brak: @"</p> : null}
                    
                    <label htmlFor="phone">Telefon:</label><br/>
                         <input
                          type = "number"
                          value={this.state.phone}
                          name="phone"
                          onChange={this.handleChange}
                          /><br/>
                         {this.state.errors.phone ? <p className="error">"Number zbyt krótki"</p> : null}
                    
                    <label htmlFor="textarea">Wiadomość:</label> <br/>
                        <textarea
                         placeholder="co najmniej 10 znaków"
                         value={this.state.textarea}
                         name="textarea"
                         onChange={this.handleChange}
                         /><br/>
                        {this.state.errors.textarea ? <p className="error">"Pole zawiera mniej niż 10 znaków"</p> : null}
                        
                    <button type="button" onClick={this.handleSubmit}>Wyślij</button>
                </form>
                {this.state.infomail && <p style={{color:"green"}}>"Wiadomość została pomyślnie wysłana"</p> }  
                {this.state.send && <p style={{color:"red"}}>"Przepraszamy, z przyczyn technicznych wiadomość nie została wysłana."</p>}
            </>
          );
    }
}


 
export default Form;