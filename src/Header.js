import logo from './logo.svg';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>{this.props.text}{this.props.status}</h2>
            </div>
        );
    }
}

export default Header;
