import React, { Component } from 'react';
import './App.css';
import Ul from './Ul';
import Header from './Header';
import axios from 'axios';

class App extends Component {
    random_character() {
        var chars = "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
        return chars.substr( Math.floor(Math.random() * 62), 1);
    }
    loadDataFromServer () {
        let url = `http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086&nameStartsWith=${this.random_character()}`;
        axios.get(url)
            .then(res => {
                this.setState({
                    data: {
                        elements: res.data.data.results,
                        status: 'Status: ' + '\ud83c\udf7a'
                    }
                });

            });

    }
    componentWillMount() {
        this.setState({
            data: {
                elements: [],
                status: 'Status: ' + '\ud83c\udf7a'
            }
        });

        this.loadDataFromServer();
        let that = this;
        window.addEventListener('StatusOnline', function (e) {
            that.loadDataFromServer();
            that.statusChanged('Online ' + '\ud83c\udf7b');

        }, false);

        window.addEventListener('StatusOffline', function (e) {
            that.statusChanged('Offline ' + '\uD83D\uDCA9');
        }, false);
    }

    render() {
        return (
            <div className='App'>
                <Header text='' status={this.state.data.status} />
                <Ul data={this.state.data} />
            </div>
        );
    }
    
    statusChanged (status) {
        this.setState({
            data: {
                elements: this.state.data.elements,
                status: 'Status: ' + status
            }
        });
    }
    
}

export default App;
