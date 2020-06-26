import React, { Component } from 'react';
import styles from "./Auth.module.css";
import cx from "classnames";
import {Col, Container, Row} from "reactstrap";

export class Signup extends Component {

   render () {
      return (
         <Row>
            <Col>
               <Container fluid className={styles.block}>
                  <Row>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>ФИО</p>
                        <input type="text" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Email</p>
                        <input type="text" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Телефон</p>
                        <input type="text" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Пароль</p>
                        <input type="password" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <p className={styles.label}>Повторите пароль</p>
                        <input type="password" className={styles.textBox}/>
                     </Col>
                     <Col className={styles.inputForm}>
                        <div className={styles.button}>
                           Зарегистрироваться
                        </div>
                     </Col>
                  </Row>
               </Container>
            </Col>
         </Row>
      );
   }
}
