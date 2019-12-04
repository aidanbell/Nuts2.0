import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Nuts from '../../components/Nuts/Nuts';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      NUTS: 0,
    }
  }

  getNuts = () => {
    console.log("bing")
    this.setState({
      NUTS: this.state.NUTS + 1,
    })
  }

  render() {
    return(
      <div className="App">
        <Header
          NUTS={this.state.NUTS}
          />
        <Tabs defaultActiveKey="nuts" id="uncontrolled-tab-example">
          <Tab eventKey="nuts" title="Nuts">
            <Nuts
              getNuts={this.getNuts}
            />
          </Tab>
          <Tab eventKey="science" title="Science">
            <p>science</p>
          </Tab>
          <Tab eventKey="three" title="Three">
            <p>three</p>
          </Tab>
          <Tab eventKey="four" title="Four">
            <p>four</p>
          </Tab>
          <Tab eventKey="five" title="Five">
            <p>Five</p>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default App;
