import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";

import AxiosWithAuth from '../../utils/AxiosWithAuth'

// import { Notify } from "react-redux-notify";
import { Card, Button } from "semantic-ui-react";

const localizer = momentLocalizer(moment);

let components = {
  // eventWrapper: Card // used by each view (Month, Day, Week),
  // dateCellWrapper: Card
  // toolbar: Button
};

const CalendarDisplay = () => {
  const [tasks, setTasks] = useState({})

  useEffect(() => {
    AxiosWithAuth()
        .get('https://wunderlist-be.herokuapp.com/api/v2/todos')
        .then(response => {
            console.log(response.data)
            setTasks(response.data)
        })
        .catch(response => {
            console.log(response)
        })
},[])

  return (
    <div>
       {/* <Calendar
        localizer={localizer}
        events={tasks.map((task, index) => ({
          id: task.id,
          title: task.title,
          allDay: false,
          start: new Date(task.date.split("|")[0]),
          end: new Date(task.date.split("|")[1])
        }))}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={e => {
          this.setState({
            modal: true,
            event: {
              eventStarts: e.start,
              eventEnds: e.end
            }
          });
        }}
        selectable
        defaultView="week"
        components={components}
      /> */}
    </div>
  );
}

export default CalendarDisplay;
