import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const CalendarComponent = ({ page, settings }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      console.log(calendarRef.current.getApi().googleCalendarApiKey);
    }
  }, []);

  return (
    <div className="col-12 py-md-5 py-3">
      <div id="gcalendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          timeZone={settings.calendar_timezone}
          googleCalendarApiKey={settings.calendar_google_api_key}
          headerToolbar={{
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay,listYear',
          }}
          events={{ googleCalendarId: settings.calendar_events }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
