import React from 'react';
import { Route,  Link } from 'react-router-dom';
import styles from './HomePage.css';
import ClassSchedule from './ClassSchedule';

const HomePage = () => {
    return (

        <div className={styles.HomePage}>
        <header>
            <h2>Class Schedule</h2>
            <nav>
                <ul>
                   <li><Link to={{
                      pathname: '/Class-Schedule',
                      hash: '#submit',
                      search: '?quick-submit=true'
                   }}
                   >MCA-1</Link></li>
                   <li><Link to="/">RESET</Link></li>
                </ul>
            </nav>
        </header>
        <Route path="/Class-Schedule" exact component={ClassSchedule} />
    </div>
    );
}


export default HomePage;