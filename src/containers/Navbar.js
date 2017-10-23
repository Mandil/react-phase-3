import React, {Component} from 'react'
import logo from '../logo.gif';

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline nav-left nav-list'>
              <li onClick={this.props.onClick} id='home'>Home</li>
              <li onClick={this.props.onClick} id='about'>About</li>
              <li onClick={this.props.onClick} id='contact'>Contact</li>
            </ul>
            <div className='brand'>
              <img src={logo} className="App-logo" alt="logo" />
              <h4>React Workshop Profile Page</h4>
            </div>
          </div>
        </div>
      </nav>
      )
  }
}

export default Navbar
