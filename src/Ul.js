import React, { Component } from 'react';
import Li from './Li'

class Ul extends Component {
    render() {
        let liElements = this.props.data.elements.map(function (el) {
            return (<Li {...el} />);
            // return (<Li key={el.id} name={el.name} description={el.style.description} icon={(el.thumbnail && el.thumbnail.icon) ? el.labels.icon : ''} />);
        });
        return (<ul className="arrivals-list">{liElements}</ul>);

    }
}

export default Ul;
