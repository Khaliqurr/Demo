import React, {Component} from 'react';
import Schedule from './Schedule';
import styles from './ClassSchedule.css';

class ClassSchedule extends Component {
   state = {
       monday: [
           { subject: 'Data Structure(RCA-202)', time: '10:50AM-12:30PM', teacher: 'UK Sir', venue: 'LT-25'},
               
        ],
        tuesday: [
            { subject: 'Data Structure(RCA-202)', time: '10:00AM-11:40AM', teacher: 'UK Sir', venue: 'LT-25'},
            { subject: 'AutoMata(RCA-203)', time: '11:40AM-12:30PM', teacher: 'VK Sir', venue: 'LT-25'},
            { subject: 'Innovation & Entrepreneurship(RCA-204)', time: '2:00PM-2:50PM', teacher: 'MHK Sir', venue: 'LT-25'},
            { subject: 'Numerical Analysis(RCA-201)', time: '2:50PM-4:30PM', teacher: 'MC Sir', venue: 'LT-25'}   
        ],
        wednesday: [
            { subject: 'AutoMata(RCA-203)', time: '10:50AM-12:30PM', teacher: 'VK Sir', venue: 'LT-25'},
            { subject: 'Numerical Analysis(RCA-201)', time: '2:00PM-2:50PM', teacher: 'MC Sir', venue: 'LT-25'}   
        ],
        thursday: [
            { subject: 'AutoMata(RCA-203)', time: '9:10AM-10:00AM', teacher: 'VK Sir', venue: 'LT-25'},
            { subject: 'DS-LAB(RCA-252)/NA-LAB(RCA-251)', time: '10:00AM-12:30PM', teacher: 'UK/MC Sir', venue: 'LAB'},
            { subject: 'Innovation & Entrepreneurship(RCA-204)', time: '2:00PM-3:40PM', teacher: 'MHK Sir', venue: 'LT-25'},   
            { subject: 'Data Structure(RCA-202)', time: '3:40PM-4:30PM', teacher: 'UK Sir', venue: 'LT-25'}
        ],
        friday: [
            { subject: 'AutoMata(RCA-203)', time: '9:10AM-10:00AM', teacher: 'VK Sir', venue: 'LT-25'},
            { subject: 'DS-LAB(RCA-252)/NA-LAB(RCA-251)', time: '10:00AM-12:30PM', teacher: 'UK/MC Sir', venue: 'LAB'},
            { subject: 'Numerical Analysis(RCA-201)', time: '2:00PM-3:40PM', teacher: 'MC Sir', venue: 'LT-25'}
        ],
        saturday: [
            { subject: 'Innovation & Entrepreneurship(RCA-204)', time: '10:50AM-12:30PM', teacher: 'MHK Sir', venue: 'LT-25'},   
            { subject: 'Human Values Professional Ethics(RHU-001)', time: '2:00PM-4:30PM', teacher: 'PS Madam', venue: 'LT-312'}
        ],
       showMonday: false,
       showTuesday: false,
       showWednesday: false,
       showThursday: false,
       showFriday: false,
       showSaturday: false

   }

toggleMondayHandler = () => {
    const doesShow = this.state.showMonday;
    this.setState({showMonday: !doesShow});
}

toggleTuesdayHandler = () => {
    const doesShow = this.state.showTuesday;
    this.setState({showTuesday: !doesShow});
}
toggleWednesdayHandler = () => {
    const doesShow = this.state.showWednesday;
    this.setState({showWednesday: !doesShow});
}

toggleThursdayHandler = () => {
    const doesShow = this.state.showThursday;
    this.setState({showThursday: !doesShow});
}

toggleFridayHandler = () => {
    const doesShow = this.state.showFriday;
    this.setState({showFriday: !doesShow});
}

toggleSaturdayHandler = () => {
    const doesShow = this.state.showSaturday;
    this.setState({showSaturday: !doesShow});
}

    render() {
/*-----------------------------*/
        let monday = null;

        if(this.state.showMonday) {
            monday = (
                <div>
                    {this.state.monday.map(mon => {
                        return  <Schedule
                        subject={mon.subject}
                        time={mon.time}
                        teacher={mon.teacher}
                        venue={mon.venue} />
                    })}
                </div>
            );
        }
/*---------------------------------*/
        let tuesday = null;

        if(this.state.showTuesday) {
            tuesday = (
                <div>
                    {this.state.tuesday.map(tue => {
                        return  <Schedule
                        subject={tue.subject}
                        time={tue.time}
                        teacher={tue.teacher}
                        venue={tue.venue} />
                    })}
                </div>
            );
        }
/*------------------------------*/
        let wednesday = null;

        if(this.state.showWednesday) {
            wednesday = (
                <div>
                    {this.state.wednesday.map(wed => {
                        return  <Schedule
                        subject={wed.subject}
                        time={wed.time}
                        teacher={wed.teacher}
                        venue={wed.venue} />
                    })}
                </div>
            );
        }
/*---------------------------*/
        let thursday = null;

        if(this.state.showThursday) {
            thursday = (
                <div>
                    {this.state.thursday.map(thu => {
                        return  <Schedule
                        subject={thu.subject}
                        time={thu.time}
                        teacher={thu.teacher}
                        venue={thu.venue} />
                    })}
                </div>
            );
        }
/*---------------------------*/
        
        let friday = null;

        if(this.state.showFriday) {
            friday = (
                <div>
                    {this.state.friday.map(fri => {
                        return  <Schedule
                        subject={fri.subject}
                        time={fri.time}
                        teacher={fri.teacher}
                        venue={fri.venue} />
                    })}
                </div>
            );
        }
/*------------------------------*/
        let saturday = null;

        if(this.state.showSaturday) {
            saturday = (
                <div>
                    {this.state.saturday.map(sat => {
                        return  <Schedule
                        subject={sat.subject}
                        time={sat.time}
                        teacher={sat.teacher}
                        venue={sat.venue} />
                    })}
                </div>
            );
        }
        
        return (
            <div className={styles.ClassSchedule}>
                <button  onClick={this.toggleMondayHandler} >Monday</button>
                {monday}
                <button  onClick={this.toggleTuesdayHandler} >Tuesday</button>
                {tuesday}
                <button  onClick={this.toggleWednesdayHandler} >Wednesday</button>
                {wednesday}
                <button  onClick={this.toggleThursdayHandler} >Thursday</button>
                {thursday}
                <button  onClick={this.toggleFridayHandler} >Friday</button>
                {friday}
                <button  onClick={this.toggleSaturdayHandler} >Saturday</button>
                {saturday}
            </div>
        );
    }
}

export default ClassSchedule;