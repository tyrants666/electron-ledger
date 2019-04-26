import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch, Redirect,NavLink} from 'react-router-dom';
import './Topbar.css';



class Topbar extends Component {

  render() {
    return (

      <div id="title-bar">
            <div id="customer-controls">
                <div className="button" id="home-button">
                  <NavLink to="/" className="material-icons">home</NavLink>
                </div>
                <div className="button" id="cust-button">
                  <NavLink to="/customers" className="material-icons">face</NavLink>
                </div>
                <div className="button" id="add-button">
                  <NavLink to="/customers/add" className="material-icons">add</NavLink>
                </div>
            </div>

            <div id="window-controls">
                <div className="button" id="min-button">
                  <i className="material-icons mb-2">minimize</i>
                </div>
                <div className="button" id="max-button">
                  <i className="material-icons md-18">web_asset</i>
                </div>
                <div className="button" id="restore-button">
                  <i className="material-icons md-18">web_asset</i>
                </div>
                <div className="button" id="close-button">
                  <i className="material-icons">close</i>
                </div>
            </div>
       </div>
    );
  }

}
export default Topbar;
// if (document.getElementById('topbar')) {
//     ReactDOM.render(<Topbar />, document.getElementById('topbar'));
// }
