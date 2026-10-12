import React from 'react';
import { format } from 'date-fns';
import { useState,useEffect } from 'react';
// MOCK DATA: Replace this with real data from Google API later
// const events = [
//   {
//     id: 1,
//     title: "Startup Weekend: Pitch Your Idea",
//     date: new Date(2025, 10, 15, 14, 0), // Nov 15, 2:00 PM
//     location: "Main Auditorium",
//     description: "Join us for a 48-hour hackathon to build the next unicorn.",
//     link: "#"
//   },
//   {
//     id: 2,
//     title: "Guest Speaker: CEO of TechFlow",
//     date: new Date(2025, 10, 22, 18, 30), // Nov 22, 6:30 PM
//     location: "Seminar Hall B",
//     description: "A deep dive into scaling SaaS products from 0 to 1M users.",
//     link: "#"
//   },
//   {
//     id: 3,
//     title: "Networking Mixer",
//     date: new Date(2025, 10, 29, 17, 0),
//     location: "Student Lounge",
//     description: "Coffee, snacks, and conversation with alumni founders.",
//     link: "#"
//   }
// ];

const EventFeed = () => {
    const [events,setEvents] = useState([]);
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CALENDAR_ID=import.meta.env.VITE_CALENDAR_ID;
    useEffect(() => {
    // Get current time in the format Google expects (ISO String)
    const now = new Date().toISOString(); 
      
    // ADDED: &timeMin=${now} ensures we only get FUTURE events
    console.log("My API URL: ",`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${now}&maxResults=3`)
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&orderBy=startTime&singleEvents=true&timeMin=${now}&maxResults=3`)
      .then(response => response.json())
      .then(data => {
        console.log("Data from Google:", data);
        // Safety Check: Ensure data.items exists before mapping
        const items = data.items || [];
        
        const formattedEvents = items.map(item => ({
          id: item.id,
          title: item.summary || "No Title", // Fallback if title is hidden
          date: new Date(item.start.dateTime || item.start.date),
          location: item.location || "TBD",
          description: item.description || "",
          // link: item.htmlLink
        }));
        setEvents(formattedEvents);
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);
  console.log(events);
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Upcoming Events</h2>
      
      <div style={styles.grid}>
        {
            events.length!=0 ? (events.map((event) => (
          <div key={event.id} style={styles.card}>
            {/* Date Badge */}
            <div style={styles.dateBadge}>
              <span style={styles.month}>{format(event.date, 'MMM')}</span>
              <span style={styles.day}>{format(event.date, 'dd')}</span>
            </div>
            
            {/* Event Details */}
            <div style={styles.content}>
              <h3 style={styles.title}>{event.title}</h3>
              <p style={styles.meta}>
                🕒 {format(event.date, 'h:mm a')} • 📍 {event.location}
              </p>
              <p style={styles.description}>{event.description}</p>
              {/* <a href={event.link} style={styles.link}>Register →</a> */}
            </div>
          </div>
        ))): <h2>☕We are currently brewing our next big event. Grab a coffee while you wait.</h2>
        }
      </div>
    </div>
  );
};

// Styles designed to float over your dark particle background
const styles = {
  container: {
    padding: '4rem 2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    color: 'white',
    position: 'relative',
    zIndex: 2, // Ensures it sits above particles
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
    borderBottom: '2px solid #38bdf8', // Cyan accent
    display: 'inline-block',
    paddingBottom: '10px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.05)', // Glassmorphism
    backdropFilter: 'blur(10px)', // The "frosted glass" effect
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'transform 0.2s ease, background 0.2s ease',
    cursor: 'default',
  },
  dateBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0f172a',
    border: '1px solid #38bdf8',
    borderRadius: '12px',
    minWidth: '80px',
    height: '80px',
    marginRight: '24px',
    boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)', // Cyan glow
  },
  month: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    color: '#38bdf8',
    fontWeight: 'bold',
  },
  day: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'white',
    lineHeight: '1',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: '1.5rem',
    margin: '0 0 8px 0',
    fontWeight: '600',
  },
  meta: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    marginBottom: '12px',
  },
  description: {
    fontSize: '1rem',
    color: '#cbd5e1',
    marginBottom: '16px',
    lineHeight: '1.5',
  },
  link: {
    color: '#38bdf8',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  }
};

export default EventFeed;