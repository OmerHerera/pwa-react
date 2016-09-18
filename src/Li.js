import React, { Component } from 'react';

class Ul extends Component {
    //return (<Li key={el.id} title={el.name} description={el.description} icon={el.labels.icon} />);
    render() {
        let thumbnail = `${this.props.thumbnail.path}.${this.props.thumbnail.extension}`;
        return (
            <li className="item">
                <span className="title">{this.props.name}</span>
                <span className="thumbnail"><img className="thumbnail" src={thumbnail} /></span>
                <span className="status">{this.props.description}</span>
            </li>
        );
    }
}

export default Ul;
