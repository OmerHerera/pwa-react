import React, { Component } from 'react';
import Li from './Li'

class Ul extends Component {
    render() {
        let liElements = this.props.data.elements.map(function (el) {
            return (<Li {...el} />);
        });
        return (<ul className="arrivals-list">{liElements}</ul>);

    }
}

export default Ul;
