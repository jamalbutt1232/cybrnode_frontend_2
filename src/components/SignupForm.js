import React, { Component } from 'react'
import Alert from "sweetalert2";
import {Login, SignUpNewUser,displayMessageOnNewEntry} from  './Utils/Utils.js'

import TabSignUp from '../components/tabs_nav/TabSignUp'

export default class SignupForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name: '',
          last_name: '',
          email: '',
          password: ''
        };
  
      }
  
    getFisrtName(event) {
      this.setState({first_name: event.target.value});
    }
  
    getLastName(event) {
        this.setState({last_name: event.target.value});
      }
   
    getEmail(event) {
        this.setState({email: event.target.value});
      }
    
      getPassword (event) {
        this.setState({password: event.target.value});
      }
     
 
      
      validateForm(event){

        if(this.state.first_name===''){

          return false;
        }
        if(this.state.last_name===''){
          return false;
        }
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

        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        password:this.state.password


      }

      if(this.validateForm()){

          console.log(user_data)

          SignUpNewUser(user_data).then(data => {
            console.log(data)

            displayMessageOnNewEntry(data)


          })

      }

    }
  
    render() {
      return (
        <form style={{marginLeft:"40%"}} onSubmit={this.handleSubmit.bind(this)}>
         <TabSignUp/>
         
         
          <div className="row">

            <label>
              First Name:
              <input type="text" value={this.state.value} onChange={this.getFisrtName.bind(this)} />
            </label>
            
            <label>
              Last Name:
              <input type="text" value={this.state.value} onChange={this.getLastName.bind(this)} />
            </label>
          
          </div>
          
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