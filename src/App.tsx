import React, { Component } from 'react';
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RoomsPage from './containers/RoomsPage/index';

// GITHUB URL:
// https://github.com/dskoneczny/react-ts-workshops

const Home = () => <div>HOME!</div>;
const Test = () => <div>TEST!</div>;

class App extends Component {
  public state = {
    title: 'HTD Academy',
  };
  public render() {
    return (
      <Router>
        <div className='app'>
          <Navbar color='light'>
            <NavbarBrand href='/'>{this.state.title}</NavbarBrand>
            <Nav className='ml-auto' navbar={true}>
            <NavItem>
              <NavLink href='/rooms'>Pokoje</NavLink>
            </NavItem>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route exact={true} path='/rooms' component={RoomsPage} />
            <Route exact={true} path='/test' component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
