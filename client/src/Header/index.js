import React, { Component } from 'react';
// import logo from './logo.svg';
import hamburger from './menu.png';
import './App.css';



class header extends Component {

  constructor(props) {
    super(props);
    this.state = {active: "navbar-item has-dropdown" }
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({active: (this.state.active.indexOf('is-active') === -1) ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"});
  }

  render() {
    return (
      <nav className="navbar" aria-label="dropdown navigation">
        <div className="navbar-start">
          <a className="navbar-item title" href="/">Connor McCrory</a>
        </div>
        <div className="navbar-menu">
          <div className={this.state.active}>
            <a className="navbar-link title-bar" onClick={this.toggleActive}>
            <img src={hamburger}/>
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">
                Resume
              </a>
              <a className="navbar-item" href="/">
                About
              </a>
              <a className="navbar-item" href="/">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}



export default header;
