import React from 'react';
import styles from './Schedule.css';

const schedule = (props) => {
   return (
       <div className={styles.Schedule}>
           <p>Subject:   {props.subject} ,   Time:    {props.time} ,  Teacher:  {props.teacher} ,  Venue:  {props.venue}</p>
       </div>
   );
};


export default schedule;