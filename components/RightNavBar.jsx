import React from 'react'
import { useState , useEffect} from 'react';
import "./rightNavBar.css";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import dotenv from 'dotenv';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};
// dotenv.config();
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const calendarId = import.meta.env.VITE_CALENDAR_ID; 
const apiKey = import.meta.env.VITE_CALENDAR_API; 

const events = [
  {
    title: 'Meeting',
    start: new Date(2025, 5, 14, 10, 0), //new Date('2025-06-13T20:00:00'),
    end: new Date(2025, 5, 17, 11, 30),
    allDay:true
  }
];
const RightNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate,setCurrentDate] = useState(new Date());
  const [view,setView] = useState('month');

  const [eventList,setEventList] = useState([]);
   useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
    )
      .then(res => res.json())
      .then(data => {
        const googleEvents = data.items.map(event => ({
          title: event.summary,
          start: new Date(event.start.dateTime || event.start.date),
          end: new Date(event.end.dateTime || event.end.date),
          allDay: !event.start.dateTime,
        }));
        setEventList(googleEvents);
      });
  }, []);
  const toggleTab = () => {
    setIsOpen(!isOpen);
  };

  return (
     <>
     
      {/* <div > */}
        <div className="tab-content">
          {/* <iframe src="https://calendar.google.com/calendar/embed?src=aryan0312g%40gmail.com&ctz=Asia%2FKolkata"  ></iframe> */}
          <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        style={{height:550}}
        view={view}
        onView={(newView => setView(newView))}
        defaultDate={new Date()}
        date={currentDate}
        onNavigate={(newDate)=>setCurrentDate(newDate)}

        eventPropGetter={(event) => ({
    style: {
      backgroundColor: event.color || '#ff9800',
      color: 'black',
      borderRadius: '4px',
      border: '1px solid white',
      padding: '2px 6px'
    }
  })}
      />
        </div>
      {/* </div> */}

      {/* <button className="toggle-button" onClick={toggleTab}>
        {isOpen ? '>' : '<'}
      </button> */}
    </>
  )
}

export default RightNavBar
