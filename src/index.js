import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
// import Titlebar from './inc/Titlebar';

// import $ from 'jquery';
// import Popper from 'popper.js';

// ReactDOM.render(<Titlebar />, document.getElementById('titlebar'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
