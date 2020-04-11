import React, { Component } from 'react'
import Alert from "sweetalert2";
import {Login,displayMessageOnNewEntry} from  './Utils/Utils.js'

export default class LoginForm extends Component{
    constructor(props) {
      super(props);
      this.state = {

          email: '',
          password: ''
        };
  
      }
  
  
   
    getEmail(event) {
        this.setState({email: event.target.value});
      }
    
      getPassword (event) {
        this.setState({password: event.target.value});
      }
     
 
      
      validateForm(event){

       
        if(this.state.email==''){
          return false;
        }
        if(this.state.password==''){
          return false;
        }

        
          return true;


      }



    handleSubmit(event) {
      event.preventDefault();

      console.log(this.state)


      let user_data={

        email:this.state.email,
        password:this.state.password


      }

      if(this.validateForm()){


          Login(user_data).then(data => {

            localStorage.setItem('token', data.data.data.token);
           // displayMessageOnNewEntry(data)


          })

      }

    }
  
    render() {
      return (
        <form style={{marginLeft:"40%"}} onSubmit={this.handleSubmit.bind(this)}>
          
          <div className="row">
          
            <label>
              Email:
              <input type="email" value={this.state.value} onChange={this.getEmail.bind(this)} />
            </label>
            <label>
              Password:
              <input type="password" value={this.state.value} onChange={this.getPassword.bind(this)} />
            
            </label>
          
          </div>

          <input type="submit" value="Submit" />


        </form>
      );
    }
  }