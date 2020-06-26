import React, { Component } from 'react';
import './Footer.module.css';
import { Container } from "reactstrap/es";
import { Col,Row } from "reactstrap";
import cx from "classnames";
import styles from "./Footer.module.css";
import logo from "../../media/logo.png";
import phone from "../../media/phone.svg";
import mail from "../../media/mail.svg";

export default class Footer extends Component {
   render() {
      return (
         <footer className={styles.footer}>
            <Container className="h-100" fluid>
               <Row className="h-100">
                  <Col md={{size: 5}} className={cx("align-self-center")}>
                     <span className={styles.footerText}>© Автошкола ООО «Автошкола», 2020 г</span>
                  </Col>
                  <Col md={{size: 2}} className={cx(styles.textCenter ,"align-self-center")}>
                     <img className="logo" src={logo} alt="Logo"/>
                  </Col>
                  <Col md={{size: 5}} className={cx("align-self-center")}>
                     <div className={cx(styles.info, "float-right")}>
                        <img src={mail} alt={"mail"} className={styles.pic}/>
                        <span className={cx(styles.footerText)}>mail@example.com</span>
                     </div>
                     <div className={cx(styles.info, "float-right")}>
                        <img src={phone} alt={"phone"} className={styles.pic}/>
                        <span className={cx(styles.footerText)}>89999999999</span>
                     </div>
                  </Col>
               </Row>
            </Container>
         </footer>
      );
   }
}
