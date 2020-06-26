import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu/NavMenu';
import { Home } from "./Home/Home";
import { FetchData } from "./FetchData";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import {Signup} from "./Auth/Signup";
import {Signin} from "./Auth/Signin";
import {Courses} from "./Courses/Courses";

export class Layout extends Component {
   static displayName = Layout.name;

   render () {
      return (
         <div>
            <NavMenu />
            <Container fluid>
               <Route exact path='/' component={Home} />
               <Route exact path='/signin' component={Signin} />
               <Route exact path='/signup' component={Signup} />
               <Route exact path='/courses' component={Courses} />
            </Container>
            <Footer/>
         </div>
      );
   }
}
