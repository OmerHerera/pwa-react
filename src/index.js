import  './../main.js'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
let heroes;
// function random_character() {
//     var chars = "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
//     return chars.substr( Math.floor(Math.random() * 62), 1);
// }
// let url = `http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086&nameStartsWith=${random_character()}`;
// axios.get(url)
//     .then(res => {
//         console.log(heroes);
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
//     });

