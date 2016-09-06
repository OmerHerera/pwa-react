import React, { Component } from 'react';
import './App.css';
import Ul from './Ul';
import Header from './Header';

class App extends Component {
    loadDataFromServer () {
        this.setState({
            data: {
                elements: [
                    {id: 1, title: 'title1', status: 'status1', time: 'time1'},
                    {id: 2, title: 'title2', status: 'status2', time: 'time2'},
                    {id: 3, title: 'title3', status: 'status3', time: 'time3'},
                    {id: 4, title: 'title4', status: 'status4', time: 'time4'},
                ],
                status: 'Status: ' + '\ud83d\udc4d'
            }
        });
    }
    componentWillMount() {
        this.loadDataFromServer();
        let that = this;
        window.addEventListener('StatusOnline', function (e) {
            that.statusChanged('Online ' + '\ud83d\udc4d');
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
                elements: [
                    {id: 1, title: 'title1', status: 'status1', time: 'time1'},
                    {id: 2, title: 'title2', status: 'status2', time: 'time2'},
                    {id: 3, title: 'title3', status: 'status3', time: 'time3'},
                    {id: 4, title: 'title4', status: 'status4', time: 'time4'},
                ],
                status: 'Status: ' + status
            }
        });
    }
    
}

export default App;
