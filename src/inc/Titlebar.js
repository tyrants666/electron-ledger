import React, { Component } from 'react';


class Titlebar extends Component {

  function () {

      var remote = require('remote');
      var BrowserWindow = remote.require('browser-window');

     function init() {
          document.getElementById("min-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();
               window.minimize();
          });

          document.getElementById("max-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();
               window.maximize();
          });

          document.getElementById("close-btn").addEventListener("click", function (e) {
               var window = BrowserWindow.getFocusedWindow();
               window.close();
          });
     };

     document.onreadystatechange = function () {
          if (document.readyState == "complete") {
               init();
          }
     };

})();

  render() {
    return (
      <div id="title-bar">
           <div id="title">My Life For The Code</div>
           <div id="title-bar-btns">
                <button id="min-btn">-</button>
                <button id="max-btn">+</button>
                <button id="close-btn">x</button>
           </div>
      </div>

    );
  }
}

export default Titlebar;
