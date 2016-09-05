import React, { Component } from 'react';

class Ul extends Component {
    render() {
        return (
            <li className="item">
                <span className="title">{this.props.title}</span>
                <span className="status">{this.props.status}</span>
                <span className="time">{this.props.time}</span>
            </li>
        );
    }
}

export default Ul;
