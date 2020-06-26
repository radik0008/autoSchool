import React, { Component } from 'react';
import styles from "./Auth.module.css";
import cx from "classnames";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

export class Signin extends Component {

   render () {
      return (
         <Row>
            <Col>
               <div className={styles.caption}>Войдите, чтобы записать на учебные курсы и вождение.</div>
               <Container fluid className={styles.block}>
                  <Row>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Ваш Email</p>
                        <input type="text" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Пароль</p>
                        <input type="password" className={styles.textBox}/>
                     </Col>
                     <Col className={cx(styles.inputForm, styles.last)}>
                        <div className={cx(styles.button, "d-inline")}>
                           Войти
                        </div>
                        <Link to={'/signup'} className={styles.link}>
                           Зарегистрироваться
                        </Link>

                     </Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      );
   }
}
