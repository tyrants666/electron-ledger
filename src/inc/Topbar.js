import React, { Component } from 'react';
import './Topbar.css';


class Topbar extends Component {

  render() {
    return (
      <div id="title-bar">
            <div id="customer-controls">
                <div className="button" id="cust-button">
                  <i className="material-icons">face</i>
                </div>
                <div className="button" id="add-button">
                  <i className="material-icons">add</i>
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
