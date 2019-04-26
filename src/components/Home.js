import React, { Component } from 'react';
import Topbar from './Topbar';
import Customers from './Customers';
import Reactlogo from './Reactlogo';
import {Route, HashRouter} from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper-react">

          <Topbar/>

          <div className="content">
            <Route exact path="/" component={Reactlogo}/>
            <Route exact path="/customers" component={Customers}/>
            <Route path="/customers/add" component={Reactlogo}/>
          </div>

        </div>
    </HashRouter>
    );
  }
}

export default Home;
