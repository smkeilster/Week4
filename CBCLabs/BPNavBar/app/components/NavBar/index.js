/**
*
* NavBar
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import './styleM.css';

import Bars from 'react-icons/lib/fa/bars';

export default class NavBar extends React.PureComponent {
  
  constructor()
  {
    super();
    this.state = 
    {
      menuOpen:false
    }
  }
  
  handleMenu = () =>
  {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }    
  }
  
  renderMenu()
  {
    if(this.state.menuOpen === true) {
      return(
        <nav className="NavMobile">
          <Link to="/" className="NavButton">Home</Link>
          <Link to="/contact" className="NavButton">Contact</Link>
          <a href="https://github.com/smkeilster" className="NavButton">Github</a>
        </nav>  
      )
    }
  }  
  render() {
    return (
      <div>
        <div className="NavBar">
          <div className="SiteName">Site Name</div>
          
          <nav className="Nav">
            <Link to="/" className="NavButton">Home</Link>
            <Link to="/contact" className="NavButton">Contact</Link>
            <a href="https://github.com/smkeilster" className="NavButton">Github</a>
              
          </nav>
          
          <Bars className="MenuIcon" onClick={this.handleMenu}/>
          
        </div>  
        {this.renderMenu()}
      </div>
    );
  }
}
