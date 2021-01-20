import React, { Component } from 'react'
import Leftview from '../../components/leftview/leftview';
import SignUp from '../../components/signup/signup';
import './signuphome.css';

class signuphome extends Component {
    render() {
        return (
            <div className="App">
               <table className="table">
                    <tr>
                    <td><Leftview/></td>
                    <td><SignUp/></td>
                    </tr>
                </table> 
            </div>
        )
    }
}

export default signuphome
