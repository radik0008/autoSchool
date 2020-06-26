import React, { Component } from 'react';
import {Col, Row} from "reactstrap";
import styles from "./Courses.module.css"
import cx from "classnames";
import filelogo from "../../media/file.svg";

export class Courses extends Component {

   constructor(props) {
      super(props);
      this.state = { courses: [], loading: true };
   }

   static getDate(date)
   {
      const d = new Date(date);
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      return `${da}.${mo}.${ye}`;
   }

   componentDidMount() {
      this.populateCoursesData();
   }

   static renderCoursesTable(courses) {
      return (
         <>
            <table className={cx("table", styles.table)} aria-labelledby="tabelLabel">
               <thead className={styles.thead}>
               <tr>
                  <th>Название</th>
                  <th>Группа</th>
                  <th>Начало обучения</th>
                  <th>Дни занятий</th>
                  <th>Время занятий</th>
                  <th>Преподаватель</th>
               </tr>
               </thead>
               <tbody>
               {courses.map(course =>
                  <tr key={courses.id}>
                     <td><b>{course.name}</b></td>
                     <td>{course.group}</td>
                     <td>{Courses.getDate(course.date)}</td>
                     <td>{course.classDays}</td>
                     <td>{course.time}</td>
                     <td>{course.employee.surname} {course.employee.name} {course.employee.secondName}</td>
                  </tr>
               )}
               </tbody>
            </table>
         <div className={styles.buttons}>
            <span className={styles.get}><img src={filelogo} alt={"filelogo"} className={styles.file}/>Записаться на курс</span>
            <span className={styles.bbutton}>Записаться</span>
         </div>
         </>
      );
   }

   render() {
      let contents = this.state.loading
         ? <div className="loader">Loading...</div>
         : Courses.renderCoursesTable(this.state.courses);

      return (
         <Row>
            <Col className={styles.wrapper}>
               <h1 id="tabelLabel" className={styles.header}>Расписание занятий</h1>
               <Row>
                  <Col md={{size: 3}}>
                     <div className={styles.gbutton}>
                        <div>Записаться на курсы</div>
                     </div>
                     <div className={styles.gbutton}>
                        <div>Записаться на вождение</div>
                     </div>
                  </Col>
                  <Col md={{size: 8}}>
                     {contents}
                  </Col>
               </Row>
            </Col>
         </Row>
      );
   }

   async populateCoursesData() {
      const response = await fetch('api/courses');
      const data = await response.json();
      this.setState({ courses: data, loading: false });
   }
}
