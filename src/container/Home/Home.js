import React, { Component } from 'react'
import SignUp from '../signup/signuphome';
import Movies from '../moviereview/movie';
import './Home.css';
import { Route,Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav>
                    <ul>
                        <li><Link to="/">SignUp</Link></li>
                        <li><Link to="/movie">Movie Dashboard</Link></li>
                    </ul>
                    </nav>
                </header>
                <div className="route">
                    <Route path="/" exact component={ SignUp }/>
                    <Route path="/movie" exact component={ Movies }/>
                </div>
            </div>
        );
    }
};

export default Home;
