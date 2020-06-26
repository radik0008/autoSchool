import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from "../../media/logo.png";

export default class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
       <header>
         <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow custom-nav" light>
           <Container fluid>
             <NavbarBrand tag={Link} to="/"><img className="logo" src={logo} alt="Logo"/></NavbarBrand>
             <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
             <Collapse className="info-line d-sm-inline-flex flex-sm-row" isOpen={!this.state.collapsed} navbar>
               <ul className="navbar-nav flex-grow">
                 <NavItem>
                   <NavLink tag={Link} className="text-dark" to="/tariff">Тарифы</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink tag={Link} className="text-dark" to="/">Акции</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink tag={Link} className="text-dark" to="/courses">Ученикам</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink tag={Link} className="text-dark" to="/">О нас</NavLink>
                 </NavItem>
               </ul>
             </Collapse>
             <ul className="navbar-nav flex-grow">
               <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/signin">Вход/Регистрация</NavLink>
               </NavItem>
             </ul>
           </Container>
         </Navbar>
       </header>
    );
  }
}
