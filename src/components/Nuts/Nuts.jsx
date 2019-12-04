import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Nuts.css';

class Nuts extends Component{
  constructor() {
    super();
  }


  render() {
    return(
      <div>
        <Button variant="outline-secondary" onClick={this.props.getNuts}>Get Nuts</Button>
        <Button variant="outline-primary">FARM</Button>
      </div>
    )
  }
}

export default Nuts;
