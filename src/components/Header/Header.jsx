import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div className="Header">
        <div className="nutsTotal">
          {this.props.NUTS}
        </div>
      </div>
    )
  }
}

export default Header;
