import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Calendar } from 'react-big-calendar';
import moment from 'moment';

import AxiosWithAuth from '../../utils/AxiosWithAuth';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// moment.locale('en-GB');
// Calendar.momentLocalizer(moment);

const CalendarDisplay = () => {
  const [calEvents, setCalEvents] = useState([])

  const convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  useEffect(() => {
    AxiosWithAuth()
      .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
      .then(response => {
        console.log(response.data);
        let tasks = response.data;

        for (let i = 0; i < tasks.length; i++) {

          tasks[i].start = convertDate(tasks[i].start)
          tasks[i].end = convertDate(tasks[i].end)
          
        }

        setCalEvents({
          calEvents:tasks
        })
        console.log(calEvents)
  
      })
      .catch(function (error) {
        console.log(error);
      });
  })

  return (
    <div>
      This is a calendar
      <div style={{ height: 700 }}>
        <Calendar
          events={calEvents}
          step={30}
          defaultView='month'
          views={['month','week','day']}
          defaultDate={new Date()}
        />
      </div>
    </div>
  )
}

export default CalendarDisplay