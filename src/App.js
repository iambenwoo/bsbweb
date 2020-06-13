import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TopBar from './Components/Nav/TopBar';
import Drawer from './Components/Nav/Drawer';
import Body from './Containers/Body';
import Footer from './Components/Nav/Footer';

import PageResourceSummary from './Containers/PageResourceSummary';
import PageLabel2 from './Containers/PageLabel2';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <TopBar />
          <Drawer />
          <Body>
            <Route path="/label2" exact component={PageLabel2} />
            <Route path="/" exact component={PageResourceSummary} />
          </Body>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }

}

export default App;