import React,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component {

  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }

  render(){
    let page;
    if(this.props.accessToken){
      page = <Nav.Link onClick={this.onLogout.bind(this)} href="#">Logout</Nav.Link>
    }else{
      page = <Nav.Link onClick={this.onLogin.bind(this)} href="#">Login</Nav.Link>
    }


    return(
      <div>
        <Navbar variant="dark" bg="dark">
          <Navbar.Brand>
              <h2>Github Searcher</h2>
          </Navbar.Brand>
          <Navbar.Collapse>
          <Nav className="text-right">
            {page}
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
