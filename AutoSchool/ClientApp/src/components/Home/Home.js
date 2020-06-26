import React, { Component } from 'react';
import {Col, Row} from "reactstrap";
import cx from "classnames"
import styles from "./Home.module.css";
import infomain from "../../media/infomain.png";
import info1 from "../../media/info1.png";
import info2 from "../../media/info2.png";
import info3 from "../../media/info3.png";
import info4 from "../../media/info4.png";

export class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {emps: [], loading: true}
   }

  static displayName = Home.name;

   componentDidMount() {
      this.populateEmpsData();
   }

   static renderEmployees(emps) {
      return (
         emps.map(emp => {
            return (
               <Col md={{size: 3}} className={styles.employee} key={emp.id}>
                  <div className={styles.block}>
                     <div><b>Фамилия: </b>{emp.surname}</div>
                     <div><b>Имя: </b>{emp.name}</div>
                     <div><b>Отчество: </b>{emp.secondName}</div>
                     <div className={styles.post}>{emp.position.name}</div>
                  </div>
               </Col>
            );
         })
      );
   }

   async populateEmpsData() {
      const response = await fetch('api/employees');
      const data = await response.json();
      this.setState({ emps: data, loading: false });
   }

  render () {
     let employees = this.state.loading
        ? <div className="loader">Loading...</div>
        : Home.renderEmployees(this.state.emps);

     return (
       <div className={styles.wrapper}>
          <Row className={styles.stocks} style={{backgroundImage: `url(${infomain})`}}>
             <Col>
                <div className={styles.caption}>
                   Акция “Автомат” по цене “Механики”
                </div>
                <div className={styles.description}>
                   Лучшее предложение для тех, кто решил обучаться на автомобиле с Автоматической КПП!!!
                </div>
                <div className={styles.captionButton}>
                   Оставить заявку
                </div>
             </Col>
          </Row>
          <Row>
             <Col className={styles.info} style={{backgroundImage: `url(${info1})`}}>
                <div className={styles.pricing}>
                   <span className={styles.spanPrice}>Категория “В” за<br/>14990₽</span>
                </div>
             </Col>
             <Col className={styles.info} style={{backgroundImage: `url(${info2})`}}>
                <div className={styles.pricing}>
                   <span className={styles.spanPrice}>Категория “C” за<br/>18990₽</span>
                </div>
             </Col>
             <Col className={styles.info} style={{backgroundImage: `url(${info3})`}}>
                <div className={styles.pricing}>
                   <span className={styles.spanPrice}>Категория “E” за<br/>18990₽</span>
                </div>
             </Col>
             <Col className={styles.info} style={{backgroundImage: `url(${info4})`}}>
                <div className={styles.pricing}>
                   <span className={styles.spanPrice}>Индивидуальное<br/>обучение теории</span>
                </div>
             </Col>
             <Col md={{size: 12}}><div className={styles.header}>Наша команда</div></Col>
          </Row>
          <Row className={styles.teamRow}>
             {employees} {/**Employees here**/}
          </Row>
       </div>
    );
  }
}
