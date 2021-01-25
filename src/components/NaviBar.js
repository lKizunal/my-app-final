import React, { Component } from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';


class NaviBar extends Component {
    // logOut(event){
    //   event.preventDefault()
    //   localStorage.removeItem('usertoken')
    //   this.props.history.push('/')
    // }

  render() {
    // const userLink = (
    //   <li className="nav-item ,navbar-nav">
    //     <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
    //   </li>
    // )
    return (

      <Nav className="justify-content-center" variant="tabs">
        <Navbar>
          <Nav.Item>
            <Nav.Link style={{ color: 'black' }} href="/">Services</Nav.Link>
          </Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="tabs" id="dropdown-basic">
              Shop
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/pccomponents">PC Components</Dropdown.Item>
              <Dropdown.Item href="/network">Network</Dropdown.Item>
              <Dropdown.Item href="/software">Software</Dropdown.Item>
              <Dropdown.Item href="/monitor">Monitors</Dropdown.Item>
              <Dropdown.Item href="/printer">Printers</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </Nav>
    );
  }
}

export default NaviBar