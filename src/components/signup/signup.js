import React, { Component } from 'react'
import './signup.css';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};



class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            email : null,
            password : null,
            errors : {
                firstName : '',
                lastName : '',
                email : '',
                password : ''
            }
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'firstName': 
            errors.firstName = 
              value.length < 2
                ? 'First Name must be at least 2 characters long!'
                : '';
            break;
          case 'lastName': 
            errors.lastName = 
              value.length < 2
                ? 'Last Name must be at least 2 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }
   handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }
    render() {
        const { errors } = this.state; 
        return (
            <div className="main">
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" placeholder="FirstName" name="firstName" onChange={ this.handleChange}/>
                    { 
                        errors.firstName.length > 0 && <span className='error'>{errors.firstName}</span>
                    }
                    <input type="text" placeholder="LastName" name="lastName" onChange={ this.handleChange}/>
                    { 
                        errors.lastName.length > 0 && <span className='error'>{errors.lastName}</span>
                    }
                    <input type="email" placeholder="Email Address" name="email" onChange={ this.handleChange}/>
                    {
                        errors.email.length > 0 && <span className='error'>{errors.email}</span>
                    }
                    <input type="password" placeholder="Password" name="password" onChange={ this.handleChange}/>
                    { 
                        errors.password.length > 0 && <span className='error'>{errors.password}</span>
                    }
                    <button type="submit">Claim Your Free Trail</button>
                </form>
            </div>
        )
    }
}

export default Signup;